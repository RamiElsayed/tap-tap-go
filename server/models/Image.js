const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  imageLink: {
    type: String,
    required: true,
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;
