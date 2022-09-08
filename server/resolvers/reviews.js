const { Review } = require('../models');

const reviews = async () => {
  const reviewsFromDatabase = await Review.find({});
  console.log(reviewsFromDatabase);
  return reviewsFromDatabase;
};

module.exports = reviews;
