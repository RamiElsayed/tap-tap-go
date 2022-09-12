const { Schema, model } = require("mongoose");
const { formatDate } = require("../utils");

const eventSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  eventName: {
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
  createdById: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdByName: {
    type: String,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
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
    required: true,
  },
  maxAttendees: {
    type: Number,
    required: true,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
