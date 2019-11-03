const createResponse = require('../../../service/response');

module.exports = (req, res, next) => {
  const { token, tokenData } = req;

  if (tokenData.role !== 1) {
    return next(createResponse(400, { error: 'Указанный аккаунт не имеет доступ' }));
  }

  const answear = createResponse(
    200,
    {
      token,
    },
    'user',
  );

  res.status(200).json(answear);
};
