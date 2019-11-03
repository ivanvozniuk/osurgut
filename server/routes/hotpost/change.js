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

  const Hotpost = mongoose.model('hotpost');
  const Model = mongoose.model(model);

  return Model.findById(idModel).exec((err, ModelData) => {
    if (err) {
      return next(createResponse(500, { error: 'Ошибка при поиске поста для горячего поста' }));
    } else if (ModelData === null) {
      return next(
        createResponse(404, {
          error: 'Пост для горячего поста дня не найдена',
        }),
      );
    }

    const { title, _id: id } = ModelData.toObject();

    return Hotpost.findOneAndUpdate({}, { title, id }, {}, (errUpd, hotpostData) => {
      if (errUpd) {
        return next(createResponse(400, { error: 'Ошибка при изменении горячего поста' }));
      } else if (hotpostData === null) {
        return next(createResponse(500, { error: 'При изменении сам горячий пост не был найден' }));
      }

      const answear = createResponse(200, hotpostData.toObject(), 'hotpost');
      res.status(200).json(answear);
    });
  });
};
