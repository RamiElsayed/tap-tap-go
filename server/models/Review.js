const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
  reviewId: {
    type: ID,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
});

const Review = model('Review', reviewSchema);

module.exports = Review;
