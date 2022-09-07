const { Review } = require('../models');

const review = async (_, { reviewId }) => {
  const reviewFromDatabase = await Review.findById({ reviewId });
  console.log(review);
  return reviewFromDatabase;
};

module.exports = review;
