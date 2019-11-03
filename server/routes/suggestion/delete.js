const mongoose = require('mongoose');

const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const { tokenData, body } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const Suggestion = mongoose.model('suggestion');

  return Suggestion.findByIdAndDelete(body.id).exec((err, suggestionData) => {
    if (err) {
      return next(createResponse(400, { error: 'Ошибка при удалении поста в предложение' }));
    } else if (suggestionData === null || suggestionData.length < 1) {
      return next(
        createResponse(404, {
          error: 'Пост в предложение не найдены',
        }),
      );
    }

    res.status(200).json(createResponse(200, suggestionData, 'suggestion'));
  });
};
