const mongoose = require('mongoose');

const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const { body, tokenData } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const Post = mongoose.model(body.model);
  console.log(body);
  const newPost = new Post({
    ...body,
  });

  newPost.save(err => {
    if (err) {
      return next(
        createResponse(400, { error: 'Ошибка при создании поста. Введите все данные корректно' }),
      );
    } else {
      const dataPost = newPost.toObject();

      const answear = createResponse(
        200,
        {
          ...dataPost,
          id: dataPost._id,
        },
        'post',
      );

      res.status(200).json(answear);
    }
  });
};
