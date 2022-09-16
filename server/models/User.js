const { Schema, model } = require("mongoose");

const bcrypt = require("bcrypt");

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
    username: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    createdAt: {
      type: String,
      default: new Date(),
      required: true,
      // trim: true,
      // get: formatDate,
    },
    profileAvatar: {
      type: String,
    },
    aboutMe: {
      type: String,
    },
    websiteUrl: {
      type: String,
    },
    number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    myEvents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      id: false,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// eventSchema.virtual('pastDate').get(function () {
//   TODO: need to figure out how to do past/upcoming virtuals
//    if (this.date < formatDate(new Date())) return this.date;
// });

const User = model("User", userSchema);

module.exports = User;
