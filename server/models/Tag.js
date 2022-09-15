const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
  tagName: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  events: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
});

const Tag = model("Tag", tagSchema);

module.exports = Tag;
