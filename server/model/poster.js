const mongoose = require('mongoose');
const PostSchema = require('./post');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  ...PostSchema.obj,
  address: {
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
  price: {
    type: String,
    required: true,
    trim: true,
  },
  nextDate: PostSchema.obj.date,
});

mongoose.model('poster', NewsSchema, 'posters');
