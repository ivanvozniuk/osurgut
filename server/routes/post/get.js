const mongoose = require('mongoose');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { id, model },
  } = req;

  const Model = mongoose.model(model);

  return Model.findById(id).exec((err, newsData) => {
    if (err) return next(createResponse(400, { error: 'Ошибка при поиске поста' }));
    if (newsData === null) return next(createResponse(404, { error: 'Пост не найден' }));

    const { hidden, __v, ...newsDataToSend } = newsData.toObject();

    const answear = createResponse(
      200,
      {
        ...newsDataToSend,
      },
      'post',
    );

    res.status(200).json(answear);
  });
};
