const mongoose = require('mongoose');

const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const { body, tokenData } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const Post = mongoose.model(body.model);

  Post.findByIdAndRemove(body.id, err => {
    if (err) {
      return next(
        createResponse(400, { error: 'Ошибка при удалении поста. Введите правильный ID' }),
      );
    } else {
      const answear = createResponse(
        200,
        {
          id: req.body.id,
          mode: req.body.model,
        },
        'post',
      );

      res.status(200).json(answear);
    }
  });
};
