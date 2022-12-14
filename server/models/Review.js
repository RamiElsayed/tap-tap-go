const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  username: {
    type: String,
  },
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
  postedBy: {
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
