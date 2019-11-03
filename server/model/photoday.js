const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = require('./post');

const { title, image, date } = PostSchema.obj;

const PhotodaySchema = new Schema({
  title,
  image,
  date,
  id: Schema.Types.ObjectId,
});

mongoose.model('photoday', PhotodaySchema, 'photoday');

module.exports = PhotodaySchema;
