const { Tag } = require("../models");

const tags = async () => {
  try {
    const tags = await Tag.find({});
    return tags;
  } catch (err) {
    console.log(`[ERROR]: Failed to get tags | ${err.message}`);
    throw new ApolloError("Failed to get tags");
  }
};

module.exports = tags;
