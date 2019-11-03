const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { model = null, type = null },
  } = req;

  const Category = mongoose.model('category');

  return Category.find({ ...(model ? { model } : null), ...(type ? { type } : null) }).exec(
    (err, categoryData) => {
      if (err) {
        return next(createResponse(400, { error: 'Ошибка при поиске категорий' }));
      } else if (categoryData === null) {
        return next(
          createResponse(404, {
            error: 'Категории не найдены',
          }),
        );
      }

      const answear = createResponse(200, [...categoryData], 'category');

      res.status(200).json(answear);
    },
  );
};
