const mongoose = require('mongoose');

const User = mongoose.model('user');

const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const { body } = req;

  const newUser = new User({
    email: body.email,
    login: body.login,
    password: body.password,
    name: body.name,
    surname: body.surname,
    role: 0,
  });

  newUser.passToHash();
  return newUser.save(err => {
    if (err) {
      return next(err);
    } else {
      const dataUser = newUser.toObject();

      const answear = createResponse(
        200,
        {
          id: dataUser._id,
          email: dataUser.email,
          login: dataUser.login,
        },
        'user',
      );

      res.status(200).json(answear);
    }
  });
};
