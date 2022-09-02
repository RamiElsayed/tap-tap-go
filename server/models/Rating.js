const { Schema, model } = require('mongoose');

const ratingSchema = new Schema({
  ratingId: {
    type: ID,
    required: true,
    unique: true,
  },
  rating: [
    {
      type: int,
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
});

const Rating = model('Rating', ratingSchema);

module.exports = Rating;
