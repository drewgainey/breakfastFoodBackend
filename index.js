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
const mongodbURL = process.env.MONGODB_URI;
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Successfuly connected to MongoDB"))
  .catch((err) => console.log(`error on db connection: ${err}`));

//mount API router
app.get("/resturants", async (req, res, next) => {
  const result = await getAllResturants();
  res.status(200).send(result);
});

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port}`);
});
