const router = require('express').Router();

const auth = require('./auth');
const post = require('./post');
const slider = require('./slide');
const photoday = require('./photoday');
const banner = require('./banner');
const category = require('./category');
const compilation = require('./compilation');
const common = require('./common');
const hotpost = require('./hotpost');
const suggestion = require('./suggestion');

module.exports = defaultHandle => {
  router.use('/auth', auth);
  router.use('/post', post);
  router.use('/slide', slider);
  router.use('/photoday', photoday);
  router.use('/banner', banner);
  router.use('/category', category);
  router.use('/compilation', compilation);
  router.use('/common', common);
  router.use('/hotpost', hotpost);
  router.use('/suggestion', suggestion);

  router.get('*', defaultHandle);

  return router;
};
