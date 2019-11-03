const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { id },
    tokenData,
  } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const Compilation = mongoose.model('compilation');

  return Compilation.findByIdAndRemove(id).exec((err, compilationData) => {
    if (err) {
      return next(createResponse(400, { error: 'Ошибка при удаление подборки' }));
    }
    if (compilationData === null) {
      return next(createResponse(404, { error: 'Подборка не найдена' }));
    }

    const answear = createResponse(
      200,
      {
        ...compilationData.toObject(),
      },
      'compilation',
    );

    res.status(200).json(answear);
  });
};
