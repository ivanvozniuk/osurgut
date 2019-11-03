const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { type = null },
  } = req;

  const Slide = mongoose.model('slide');

  return Slide.find(type === null ? {} : { type }).exec((err, sliderData) => {
    if (err) {
      return next(createResponse(400, { error: 'Ошибка при поиске слайдов' }));
    } else if (sliderData === null || sliderData.length < 1) {
      return next(
        createResponse(404, {
          error: 'Слайды не найдены',
        }),
      );
    }

    res.status(200).json(createResponse(200, [...sliderData], 'slider'));
  });
};
