const { Schema, model } = require("mongoose");

const locationSchema = new Schema({
  buildingNumber: {
    type: String,
  },
  streetName: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
  },
  county: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  state: {
    type: String,
  },
  postcode: {
    type: String,
    required: true,
  },
});

const Location = model("Location", locationSchema);

module.exports = Location;
