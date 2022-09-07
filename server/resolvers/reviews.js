const { Review } = require('../models');

const review = async () => {
  const reviewsFromDatabase = await Review.find({});
  console.log(reviewsFromDatabase);
  return reviewsFromDatabase;
};

module.exports = review;
