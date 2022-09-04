const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
