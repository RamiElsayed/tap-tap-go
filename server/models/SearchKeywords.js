const { Schema, model } = require('mongoose');

const searchKeywordsSchema = new Schema({
  reviewId: {
    type: Number,
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

const SearchKeywords = model('SearchKeywords', searchKeywordsSchema);

module.exports = Review;
