const mongoose = require('mongoose');
const createResponse = require('../service/response');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
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
  category: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  date: {
    day: {
      type: Number,
      required: true,
      trim: true,
    },
    month: {
      type: Number,
      required: true,
      trim: true,
    },
    hours: {
      type: Number,
      required: true,
      trim: true,
    },
    minutes: {
      type: Number,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  body: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
    trim: true,
  },
  views: {
    type: Number,
    required: true,
    trim: true,
  },
  hidden: Boolean,
  hot: Boolean,
});

PostSchema.statics.findPost = function(req, isHidden = null, next) {
  if (isHidden !== null) {
    req.hidden = isHidden;
  }

  this.findOne(req).exec((err, post) => {
    if (err) {
      return next(err);
    } else if (post === null) {
      return next(createResponse(404, 'Пост с таким id не найден'), null);
    }
    next(null, post);
  });
};

mongoose.model('post', PostSchema, 'posts');

module.exports = PostSchema;
