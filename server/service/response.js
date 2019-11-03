module.exports = (status, message, type = 'errors', also, after) => {
  return { body: { [type]: message, also }, status, after };
};
