const express = require('express');
const next = require('next');
const url = require('url');

require('dotenv').config();

require('./service/mongoose');
require('./model/user');
require('./model/post');
require('./model/news');
require('./model/poster');
require('./model/slide');
require('./model/photoday');
require('./model/banner');
require('./model/category');
require('./model/compilation');
require('./model/hotpost');
require('./model/suggestion');

const routes = require('./routes/index');
const bootstrap = require('./service/bootstrap');

const port = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== 'production';

const server = next({ dev, dir: './client' });

const handler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  server.getRequestHandler()(req, res, parsedUrl);
};

server.prepare().then(async () => {
  bootstrap(express(), port, async app => {
    app.use(routes(handler));
  });
});
