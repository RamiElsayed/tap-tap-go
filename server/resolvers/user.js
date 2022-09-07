const { User } = require('../models');

const user = async (_, { userId }) => {
  const userFromDatabase = await User.findById(userId);
  console.log(user);
  return userFromDatabase;
};

module.exports = user;
var mongoose = require('mongoose');
mongoose.Types.ObjectId.isValid('6318f31dc12f49c2673a6fc1');
