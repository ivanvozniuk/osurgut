const mongoose = require('mongoose');
const { jwtGenerate, jwtVerifyExp, jwtParseRefresh } = require('../../service/jwt');
const createResponse = require('../../service/response');

const User = mongoose.model('user');

module.exports = (req, res, next) => {
  const { refresh: refreshClient } = req.body;

  if (!refreshClient) return next(createResponse(400, { error: 'Токен не найден' }));

  return jwtParseRefresh(refreshClient, (err, decoded) => {
    if (err || !decoded) return next(createResponse(401, { error: 'Ошибка авторизации' }));

    return User.findById(decoded.id).exec((errFind, userData) => {
      if (errFind || userData === null) {
        return next(createResponse(401, { error: 'Ошибка авторизации' }));
      }

      const { refresh: refreshUser } = userData;

      return jwtParseRefresh(refreshUser, (errUserRefresh, decodedUser) => {
        if (errUserRefresh) return next(errUserRefresh);
        if (jwtVerifyExp(decoded.exp, decodedUser.exp) !== true) {
          return next(createResponse(401, { error: 'Ошибка авторизации' }));
        }

        const { token, refresh } = jwtGenerate(userData);

        userData.refresh = refresh;
        return userData.save(errSave => {
          if (errSave) return next(errSave);

          const answear = createResponse(
            200,
            {
              refresh,
              token,
            },
            'user',
          );

          res.status(200).json({ answear });
        });
      });
    });
  });
};
