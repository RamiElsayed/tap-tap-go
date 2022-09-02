const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const eventSchema = require('./Event');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
  },
  {
    toJSON: {
      virtuals: true,
      id: false,
    },
  },
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

eventSchema.virtual('pastDate').get(function () {
  // TODO: need to figure out how to do past/upcoming virtuals
  // if (this.date < formatDate(new Date())) return this.date;
});

const User = model('User', userSchema);

module.exports = User;
