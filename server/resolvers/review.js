const { Review } = require("../models");
const { DateTime, PhoneNumber } = require("graphql-scalars");

const review = async (_, { reviewId }) => {
  const reviewFromDatabase = await Review.findById({ reviewId });
  console.log(review);
  return reviewFromDatabase;
};

module.exports = review;
