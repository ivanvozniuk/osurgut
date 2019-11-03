const mongoose = require('mongoose');

const Banner = mongoose.model('banner');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const { body, tokenData } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const newBanner = new Banner({
    ...body,
  });

  return newBanner.save(err => {
    if (err) {
      return next(createResponse(401, { error: 'Ошибка при создании баннера' }));
    } else {
      const answear = createResponse(200, newBanner.toObject(), 'banner');

      res.status(200).json(answear);
    }
  });
};
