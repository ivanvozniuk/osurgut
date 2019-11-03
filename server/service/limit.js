const rateLimit = require('express-rate-limit');
const createResponse = require('./response');

const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 1, // start blocking after 5 requests
  message: createResponse(401, { error: 'Вы уже отправили пост в предложение. Попробуйте позже' }),
});

module.exports = createAccountLimiter;
