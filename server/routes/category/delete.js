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

  const Category = mongoose.model('category');

  return Category.findByIdAndRemove(id).exec((err, categoryData) => {
    if (err) return next(createResponse(400, { error: 'Ошибка при удаление категории' }));
    if (categoryData === null) return next(createResponse(404, { error: 'Категория не найдена' }));

    const answear = createResponse(
      200,
      {
        ...categoryData.toObject(),
      },
      'category',
    );

    res.status(200).json(answear);
  });
};
