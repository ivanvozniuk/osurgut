const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  type: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  value: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
});

mongoose.model('category', CategorySchema, 'categories');

module.exports = CategorySchema;
