const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { model, category },
  } = req;

  const Model = mongoose.model(model);

  return Model.find({ category })
    .select('_id title image category')
    .exec((err, listData) => {
      if (err) return next(createResponse(400, { error: 'Ошибка при поиске постов' }));
      if (listData === null || listData.length === 0) {
        return next(createResponse(404, { error: 'Посты по такой категории не найдены' }));
      }

      const answear = createResponse(200, listData, 'posts');

      res.status(200).json(answear);
    });
};
