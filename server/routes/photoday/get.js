const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const Photoday = mongoose.model('photoday');

  return Photoday.findOne({}).exec((err, photodayData) => {
    if (err) {
      return next(createResponse(500, { error: 'Ошибка при поиске фотографии дня' }));
    } else if (photodayData === null) {
      return next(
        createResponse(404, {
          error: 'Фотография дня не найдена',
        }),
      );
    }

    const answear = createResponse(200, photodayData.toObject(), 'photoday');
    res.status(200).json(answear);
  });
};
