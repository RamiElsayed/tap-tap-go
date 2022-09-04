const { Schema, model } = require("mongoose");
const { formatDate } = require("../utils");

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
    type: Number,
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
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  attendees: {
    type: Number,
    required: true,
  },
  maxAttendees: {
    type: Number,
    required: true,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
