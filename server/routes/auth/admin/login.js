const mongoose = require('mongoose');
const jwtGenerate = require('../../../service/jwt').jwtGenerate;

const User = mongoose.model('user');

const createResponse = require('../../../service/response');

module.exports = (req, res, next) => {
  const { login = null, password = null } = req.body;

  if (login === null || password === null) {
    return next(createResponse(400, { error: 'Неверный логин или пароль' }));
  }

  User.findUser(login, (err, userData) => {
    if (userData === null) {
      return next(createResponse(400, { error: 'Пользователь не найден' }));
    }

    if (err) {
      return next(createResponse(400, { error: 'Неверный логин или пароль' }));
    }

    if (userData.role !== 1) {
      return next(createResponse(400, { error: 'Указанный аккаунт не имеет доступ' }));
    }

    return userData.passIsValid(password, () => {
      const { token, refresh } = jwtGenerate(userData);

      userData.refresh = refresh;
      return userData.save(errSave => {
        if (errSave) {
          return next(errSave);
        }

        userData = userData.toObject();

        const answear = createResponse(
          200,
          {
            id: userData._id,
            email: userData.email,
            login: userData.login,
            name: userData.name,
            surname: userData.surname,
            role: userData.role,
            token,
            refresh,
          },
          'user',
        );

        res.status(200).json(answear);
      });
    });
  });
};
