const { Tag } = require('../models');

const tag = async (_, { tagId }) => {
  const tagFromDatabase = await Tag.findById(tagId);
  console.log(tag);
  return tagFromDatabase;
};

module.exports = tag;
