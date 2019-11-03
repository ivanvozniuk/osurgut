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

  const Slide = mongoose.model('slide');

  return Slide.findByIdAndRemove(id).exec((err, sliderData) => {
    if (err) return next(createResponse(400, { error: 'Ошибка при удаление слайда' }));
    if (sliderData === null) return next(createResponse(404, { error: 'Слайд не найден' }));

    const answear = createResponse(
      200,
      {
        ...sliderData.toObject(),
      },
      'slide',
    );

    res.status(200).json(answear);
  });
};
