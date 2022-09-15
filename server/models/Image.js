const { Schema } = require("mongoose");

const imageSchema = new Schema({
  imageLink: {
    type: String,
    required: true,
  },
});

module.exports = imageSchema;
