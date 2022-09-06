const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  imageLink: {
    type: String,
    required: true,
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
});

const Image = model('Image', imageSchema);

module.exports = Image;
