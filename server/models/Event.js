const { Schema, model } = require("mongoose");
const { formatDate } = require("../utils");
const locationSchema = require("../models/Location");
const imageSchema = require("../models/Image");

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
  createdById: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  location: locationSchema,
  images: [imageSchema],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
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
    default: 0,
  },
  maxAttendees: {
    type: Number,
    required: true,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
