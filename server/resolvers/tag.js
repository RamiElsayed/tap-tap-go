const { Tag } = require('../models');

const tag = async (_, { tagId }) => {
  try {
    const tagFromDatabase = await Tag.findById(tagId);
    console.log(tag);
    return tagFromDatabase;
  } catch (err) {
    console.log(`[ERROR]: Failed to get tag | ${err.message}`);
    throw new ApolloError('Failed to get tag');
  }
};

module.exports = tag;
