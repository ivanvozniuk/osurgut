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

  const Banner = mongoose.model('banner');

  return Banner.findByIdAndRemove(id).exec((err, bannerData) => {
    if (err) return next(createResponse(400, { error: 'Ошибка при удаление баннера' }));
    if (bannerData === null) return next(createResponse(404, { error: 'Баннер не найден' }));

    const answear = createResponse(
      200,
      {
        ...bannerData.toObject(),
      },
      'banner',
    );

    res.status(200).json(answear);
  });
};
