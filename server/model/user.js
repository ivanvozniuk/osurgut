const mongoose = require('mongoose');
const crypto = require('crypto');
const createResponse = require('../service/response');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  login: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  hash: String,
  salt: String,
  refresh: { type: String, default: '' },
});

UserSchema.methods.passToHash = function() {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.password = crypto.pbkdf2Sync(this.password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.statics.findUser = function(login, next) {
  this.findOne({ $or: [{ login }, { email: login }] }).exec((err, user) => {
    if (err) {
      return next(err);
    } else if (user === null) {
      return next(createResponse(404, 'Пользователь с таким логином или паролем не найден'), null);
    }
    next(null, user);
  });
};

UserSchema.methods.passIsValid = function(password, cb) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

  if (this.hash !== hash) {
    return cb(createResponse(400, 'Неверный пароль'), null);
  }

  cb();
};

mongoose.model('user', UserSchema, 'users');
