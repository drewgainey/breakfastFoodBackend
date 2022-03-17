require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { getAllResturants } = require("./Resturant.Model");

const port = process.env.PORT || 3001;

//handle CORS error
app.use(cors());

//logger
app.use(morgan("dev"));

//body parser
app.use(bodyParser.json());

//connect to mongodb
const mongodbURL = "mongodb+srv://drewgainey:TeuEmOSoc975cWxe@cluster0.dndkz.mongodb.net/greekResturants?retryWrites=true&w=majority";
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Successfuly connected to MongoDB"))
  .catch((err) => console.log(`error on db connection: ${err}`));

//mount API router
app.get("/", async (req, res, next) => {
  const result = await getAllResturants();
  res.status(200).send(result);
});

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${3001}`);
});
