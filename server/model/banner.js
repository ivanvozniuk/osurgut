const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BannerSchema = new Schema({
  image: {
    big: {
      type: String,
      required: true,
    },
    large: {
      type: String,
      required: true,
    },
    medium: {
      type: String,
      required: true,
    },
    small: {
      type: String,
      required: true,
    },
  },
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

mongoose.model('banner', BannerSchema, 'banners');

module.exports = BannerSchema;
