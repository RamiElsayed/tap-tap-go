const { Schema, model } = require('mongoose');

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
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postCode: { type: String, required: true },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
});

const Location = model('Location', locationSchema);

module.exports = Location;
