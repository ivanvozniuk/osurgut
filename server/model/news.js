const mongoose = require('mongoose');
const PostSchema = require('./post');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  ...PostSchema.obj,
  author: {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
});

mongoose.model('news', NewsSchema, 'news');
