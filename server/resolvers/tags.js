const { Tag } = require('../models');

const tags = async () => {
  const tags = await Tag.find({});
  console.log(tags);
  return tags;
};

module.exports = tags;
