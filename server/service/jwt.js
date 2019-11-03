// const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const createResponse = require('../service/response');

const User = mongoose.model('user');

const getTokenFromHeaders = req => {
  const {
    headers: { authorization },
  } = req;

  if (authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }
  return null;
};

const jwtGenerate = user => {
  const today = new Date();

  const expirationDate = new Date(today);
  const expirationDateRefresh = new Date(today);

  expirationDate.setDate(today.getDate() + 1);
  expirationDateRefresh.setDate(today.getDate() + 30);

  return {
    token: jwt.sign(
      {
        login: user.login,
        role: user.role,
        id: user._id.toString(),
        exp: parseInt(expirationDate.getTime() / 1000, 10),
      },
      process.env.JWT_SECRET,
    ),
    refresh: jwt.sign(
      {
        login: user.login,
        role: user.role,
        id: user._id.toString(),
        exp: parseInt(expirationDateRefresh.getTime() / 1000, 10),
      },
      process.env.JWT_SECRET_REFRESH,
    ),
  };
};

const jwtParseRefresh = (token, nx) => {
  return jwt.verify(token, process.env.JWT_SECRET_REFRESH, (err, decoded) => {
    if (!decoded || err) nx(createResponse(401, { error: 'Ошибка авторизации' }));

    return nx(null, decoded);
  });
};

const jwtVerifyExp = (exp, time = null) => {
  if (!time) {
    const today = new Date();
    time = new Date(today);
    time = parseInt(time.getTime() / 1000, 10);
  }

  return exp <= parseInt(time);
};

const jwtMiddleWare = (req, res, next) => {
  const token = getTokenFromHeaders(req);

  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(createResponse(401, { error: 'Ошибка авторизации' }));
    }

    return User.findById(decoded.id, (errFind, user) => {
      if (errFind || user === null) {
        return next(createResponse(401, { error: 'Ошибка авторизации' }));
      }

      if (jwtVerifyExp(decoded.exp)) {
        return next(createResponse(401, { error: 'Ошибка авторизации' }));
      } else {
        req.token = token;
        req.tokenData = decoded;

        return next();
      }
    });
  });
};

module.exports = {
  jwtMiddleWare,
  jwtGenerate,
  jwtParseRefresh,
  jwtVerifyExp,
};
