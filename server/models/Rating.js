const { Schema, model } = require("mongoose");

const ratingSchema = new Schema({
  ratingId: {
    type: Number,
    required: true,
    unique: true,
  },
  rating: [
    {
      type: Number,
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
});

const Rating = model("Rating", ratingSchema);

module.exports = Rating;
