import { Schema, model } from "mongoose";

const appointmentSchema = new Schema(
  {
    state: {
      type: String,
      required: true,
    },
    doctorType: {
      type: String,
      required: true,
      enum: ["general", "pediatric", "dentist", "ent specialist"],
    },
    date: {
      type: Date,
      required: true,
    },
    person: {
      type: String,
      required: true,
      enum: ["male", "female", "other", "child"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;
