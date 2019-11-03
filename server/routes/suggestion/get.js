const mongoose = require('mongoose');

const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const { tokenData, id = null } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const Suggestion = mongoose.model('suggestion');

  return Suggestion[id === null ? 'find' : 'findById'](id === null ? {} : { id }).exec(
    (err, suggestionData) => {
      if (err) {
        return next(createResponse(400, { error: 'Ошибка при поиске постов в предложение' }));
      } else if (suggestionData === null || suggestionData.length < 1) {
        return next(
          createResponse(404, {
            error: 'Посты в предложение не найдены',
          }),
        );
      }

      res.status(200).json(createResponse(200, [...suggestionData], 'suggestion'));
    },
  );
};
