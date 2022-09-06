const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  buildingNumber: {
    type: String,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: Date,
    required: true,
    get: formatDate,
  },
  state: {
    type: Number,
    required: true,
  },
  postCode: { type: String, required: true },
});

const Location = model('Location', locationSchema);

module.exports = Location;
