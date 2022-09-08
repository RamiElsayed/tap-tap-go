const { Review } = require('../models');

const review = async (_, { reviewId }) => {
  const reviewFromDatabase = await Review.findById(reviewId);
  console.log(reviewFromDatabase);
  return reviewFromDatabase;
};

module.exports = review;
