const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = require('./post');

const { title, image, date } = PostSchema.obj;

const СompilationSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  model: {
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

mongoose.model('compilation', СompilationSchema, 'сompilation');

module.exports = СompilationSchema;
