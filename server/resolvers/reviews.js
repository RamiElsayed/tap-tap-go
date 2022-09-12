const { Review } = require('../models');

const reviews = async () => {
  try {
    const reviewsFromDatabase = await Review.find({});
    console.log(reviewsFromDatabase);
    return reviewsFromDatabase;
  } catch (err) {
    console.log(`[ERROR]: Failed to get reviews | ${err.message}`);
    throw new ApolloError('Failed to get reviews');
  }
};

module.exports = reviews;
