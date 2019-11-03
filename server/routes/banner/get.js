const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { type },
  } = req;

  const Banner = mongoose.model('banner');

  const isAll = type === null;

  return Banner[isAll ? 'find' : 'findOne'](isAll ? {} : { type }).exec((err, bannerData) => {
    if (err) return next(createResponse(400, { error: 'Ошибка при поиске баннера' }));
    if (bannerData === null) return next(createResponse(404, { error: 'Баннер не найден' }));

    let answear = null;
    if (!isAll) {
      answear = createResponse(200, bannerData.toObject(), 'banner');
    } else {
      answear = createResponse(200, [...bannerData], 'banner');
    }

    res.status(200).json(answear);
  });
};
