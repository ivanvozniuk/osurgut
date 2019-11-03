const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { model },
  } = req;

  const Model = mongoose.model(model);

  return Model.find({ hidden: false })
    .limit(10)
    .exec((err, lastestData) => {
      if (err) return next(createResponse(400, { error: 'Ошибка при выборке последних постов' }));
      if (lastestData === null || lastestData.length < 1) {
        return next(createResponse(404, { error: 'Последние посты не найдены' }));
      }

      const answear = createResponse(
        200,
        lastestData.map(({ _id, title, date, hot }) => ({
          _id,
          title,
          date,
          hot,
        })),
        'latest',
      );

      res.status(200).json(answear);
    });
};
