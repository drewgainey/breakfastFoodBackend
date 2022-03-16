const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  lat: String,
  lon: String,
  grapeLeaves: String
});

module.exports = {
  RestaurantSchema: mongoose.model("Restaurant", RestaurantSchema),
};