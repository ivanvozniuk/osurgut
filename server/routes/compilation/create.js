const mongoose = require('mongoose');

const Compilation = mongoose.model('compilation');
const createResponse = require('../../service/response');

module.exports = (req, res, next) => {
  const {
    body: { posts, title: titleCompilation, model, type },
    tokenData,
  } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(401, { error: 'Ошибка авторизации' }));
  }

  const Model = mongoose.model(model);

  return Model.find({ _id: { $in: posts } }).exec((err, newsDataArr) => {
    if (err) {
      return next(
        createResponse(500, { error: 'Ошибка при поиске поста или постов для подборки' }),
      );
    }

    if (newsDataArr === null && newsDataArr.length < 1) {
      return next(createResponse(404, { error: 'Пост или посты для подборки не найден' }));
    }

    const postsData = newsDataArr.map(({ _id, date, image, title }) => ({
      _id,
      date,
      image,
      model,
      title,
    }));

    const newSlide = new Compilation({
      title: titleCompilation,
      model,
      type,
      posts: postsData,
    });

    newSlide.save(errSave => {
      if (errSave) {
        return next(createResponse(500, { error: 'Ошибка при создании подборки' }));
      } else {
        const { __v, ...dataSlide } = newSlide.toObject();

        const answear = createResponse(
          200,
          {
            ...dataSlide,
          },
          'compilation',
        );

        res.status(200).json(answear);
      }
    });
  });
};
