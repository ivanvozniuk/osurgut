const createResponse = require('../../service/response');

module.exports = (req, res) => {
  const { token } = req;

  const answear = createResponse(
    200,
    {
      token,
    },
    'user',
  );

  res.status(200).json(answear);
};
