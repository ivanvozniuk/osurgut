const mongoose = require('mongoose');

const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const { body } = req;

  const Suggestion = mongoose.model('suggestion');

  const newSuggestion = new Suggestion({
    ...body,
  });

  newSuggestion.save(err => {
    if (err) {
      return next(
        createResponse(400, {
          error: 'Ошибка при создании поста в предложение. Введите все данные корректно',
        }),
      );
    } else {
      const dataPost = newSuggestion.toObject();

      const answear = createResponse(
        200,
        {
          ...dataPost,
        },
        'suggestion',
      );

      res.status(200).json(answear);
    }
  });
};
