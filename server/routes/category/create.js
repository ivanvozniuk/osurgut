const mongoose = require('mongoose');

const Category = mongoose.model('category');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const { body, tokenData } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const newCategory = new Category({ ...body });

  newCategory.save(errSave => {
    if (errSave) {
      return next(createResponse(500, { error: 'Ошибка при создании категории' }));
    } else {
      const { __v, ...dataCategory } = newCategory.toObject();

      const answear = createResponse(
        200,
        {
          ...dataCategory,
        },
        'category',
      );

      res.status(200).json(answear);
    }
  });
};
