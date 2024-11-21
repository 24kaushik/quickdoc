import express from 'express';
import connectMongo from './db';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectMongo();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
