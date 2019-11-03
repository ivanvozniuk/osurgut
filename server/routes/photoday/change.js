const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { id: idModel, model },
    tokenData,
  } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const Photoday = mongoose.model('photoday');
  const Model = mongoose.model(model);

  return Model.findById(idModel).exec((err, ModelData) => {
    if (err) {
      return next(createResponse(500, { error: 'Ошибка при поиске поста для фотографии дня' }));
    } else if (ModelData === null) {
      return next(
        createResponse(404, {
          error: 'Пост для фотографии дня не найдена',
        }),
      );
    }

    const { title, _id: id, image, date } = ModelData.toObject();

    return Photoday.findOneAndUpdate(
      {},
      { title, id, image, date, model },
      {},
      (errUpd, photodayData) => {
        if (errUpd) {
          return next(createResponse(400, { error: 'Ошибка при изменении фотографии дня' }));
        } else if (photodayData === null) {
          return next(createResponse(500, { error: 'При изменении фотография дня не найдена' }));
        }

        const answear = createResponse(200, photodayData.toObject(), 'photoday');
        res.status(200).json(answear);
      },
    );
  });
};
