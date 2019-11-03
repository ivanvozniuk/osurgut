const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = require('./post');

const { title, image, date } = PostSchema.obj;

const SlideSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  posts: [
    {
      model: String,
      title,
      image,
      date,
      _id: Schema.Types.ObjectId,
    },
  ],
});

mongoose.model('slide', SlideSchema, 'slider');

module.exports = SlideSchema;
