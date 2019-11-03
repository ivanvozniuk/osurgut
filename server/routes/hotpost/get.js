const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const Hotpost = mongoose.model('hotpost');

  return Hotpost.findOne({})
    .limit(10)
    .exec((err, hotpostData) => {
      if (err) {
        return next(createResponse(500, { error: 'Ошибка при поиске горячего поста' }));
      } else if (hotpostData === null) {
        return next(
          createResponse(404, {
            error: 'Горячий пост не найден',
          }),
        );
      }

      const answear = createResponse(200, hotpostData.toObject(), 'hotpost');
      res.status(200).json(answear);
    });
};
