const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = require('./post');

const { title } = PostSchema.obj;

const HotpostSchema = new Schema({
  title,
  id: Schema.Types.ObjectId,
});

mongoose.model('hotpost', HotpostSchema, 'hotpost');

module.exports = HotpostSchema;
