const mongoose = require('mongoose');

const Slide = mongoose.model('slide');
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
        createResponse(500, { error: 'Ошибка при поиске поста или постов для изменения слайда' }),
      );
    }

    if (newsDataArr === null && newsDataArr.length < 1) {
      return next(createResponse(404, { error: 'Пост или посты для изменения слайда не найден' }));
    }

    const postsData = newsDataArr.map(({ _id, date, image, title }) => ({
      _id,
      date,
      image,
      title,
    }));

    return Slide.findOneAndUpdate({ _id: id }, { posts: postsData }, {}, (errUpd, slideData) => {
      if (errUpd) {
        return next(createResponse(400, { error: 'Ошибка при изменении постов в слайде' }));
      } else if (slideData === null && slideData.length < 1) {
        return next(createResponse(500, { error: 'При изменении слайд стал пустой' }));
      }

      const answear = createResponse(200, slideData, 'slide');
      res.status(200).json(answear);
    });
  });
};
