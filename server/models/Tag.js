const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
  tagName: {
    type: String,
    required: true,
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});

const Tag = model("Tag", tagSchema);

module.exports = Tag;
