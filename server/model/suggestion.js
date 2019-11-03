const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SuggestionSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  date: String,
  body: {
    type: String,
    required: true,
  },
  address: String,
  price: String,
  contact: String,
  social: String,
  website: String,
});

mongoose.model('suggestion', SuggestionSchema, 'suggestion');

module.exports = SuggestionSchema;
