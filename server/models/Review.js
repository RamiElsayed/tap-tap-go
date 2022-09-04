const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
  username: {
    type: String,
    required: true,
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
});

const Review = model('Review', reviewSchema);

module.exports = Review;
