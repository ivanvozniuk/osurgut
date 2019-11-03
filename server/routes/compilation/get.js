const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { type = null },
  } = req;

  const Compilation = mongoose.model('compilation');

  return Compilation.find(type === null ? {} : { type }).exec((err, compilationData) => {
    if (err) {
      return next(createResponse(400, { error: 'Ошибка при поиске подборок' }));
    } else if (compilationData === null || compilationData.length < 1) {
      return next(
        createResponse(404, {
          error: 'Подборки не найдены',
        }),
      );
    }

    res.status(200).json(createResponse(200, compilationData, 'compilation'));
  });
};
