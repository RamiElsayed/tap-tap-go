const { Schema } = require("mongoose");

const locationSchema = new Schema({
  buildingNumber: {
    type: String,
  },
  streetName: {
    type: String,
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
  },
});

module.exports = locationSchema;
