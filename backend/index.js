import express from "express";
import connectMongo from "./db.js";
import jwt from "jsonwebtoken";
import User from "./model/User.js";
import Appointment from "./model/Appointment.js";
import bodyParser from "body-parser";
import cors from "cors";
const corsOptions = {
  origin: "*",
};


const app = express();
const port = 3000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Never store your secret in plain text. This is an exception cuz its my hackathon project and i dont have much time
const jwtToken = "iDontUsuallyStoreInPlainText";

connectMongo();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }
    const newUser = new User({ email, password });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, jwtToken, { expiresIn: "1h" });
    res.json({ token , ok:true});
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }
  const trimmedEmail = email.trim();
  try {
    const user = await User.findOne({ email: trimmedEmail });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({ id: user._id }, jwtToken, { expiresIn: "1h" });
    res.json({ token , ok:true});
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, jwtToken);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

app.post("/appointments", verifyToken, async (req, res) => {
  const { state, doctorType, date, person } = req.body;
  if (!state || !doctorType || !date || !person) {
    return res.status(400).send("All fields are required");
  }
  try {
    const newAppointment = new Appointment({
      userId: req.user.id,
      state,
      doctorType,
      date,
      person
    });
    await newAppointment.save();
    res.status(201).json({...newAppointment._doc, ok:true});
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

app.get("/appointments", verifyToken, async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.id });
    res.json(appointments);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
