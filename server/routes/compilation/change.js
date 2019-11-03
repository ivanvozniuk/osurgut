const mongoose = require('mongoose');

const Compilation = mongoose.model('compilation');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { id, posts, model },
    tokenData,
  } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const Model = mongoose.model(model);

  return Model.find({ _id: { $in: posts } }).exec((err, newsDataArr) => {
    if (err) {
      return next(
        createResponse(500, { error: 'Ошибка при поиске поста или постов для изменения подборки' }),
      );
    }

    if (newsDataArr === null && newsDataArr.length < 1) {
      return next(
        createResponse(404, { error: 'Пост или посты для изменения подборки не найден' }),
      );
    }

    const postsData = newsDataArr.map(({ _id, date, image, title }) => ({
      _id,
      date,
      image,
      title,
    }));

    return Compilation.findOneAndUpdate(
      { _id: id },
      { posts: postsData },
      {},
      (errUpd, compilationData) => {
        if (errUpd) {
          return next(createResponse(400, { error: 'Ошибка при изменении постов в подборке' }));
        } else if (compilationData === null && compilationData.length < 1) {
          return next(createResponse(500, { error: 'При изменении подборка стала пустой' }));
        }

        const answear = createResponse(200, compilationData, 'compilation');
        res.status(200).json(answear);
      },
    );
  });
};
