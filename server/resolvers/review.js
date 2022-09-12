const { Review } = require('../models');

const review = async (_, { reviewId }) => {
  try {
    const reviewFromDatabase = await Review.findById(reviewId);
    console.log(reviewFromDatabase);
    return reviewFromDatabase;
  } catch (err) {
    console.log(`[ERROR]: Failed to get review | ${err.message}`);
    throw new ApolloError('Failed to get review');
  }
};

module.exports = review;
