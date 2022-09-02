const { Schema, model } = require('mongoose');
const { formatDate } = require('../utils');

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    get: formatDate,
  },
  price: {
    type: int,
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  attendees: {
    type: int,
    required: true,
  },
  maxAttendees: {
    type: int,
    required: true,
  },
});

const Event = model('Event', eventSchema);

module.exports = Event;
