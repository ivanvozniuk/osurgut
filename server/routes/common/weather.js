const request = require('request');
const createResponse = require('../../service/response');

const store = require('../../service/store');

module.exports = (req, res) => {
  const timeRange = new Date().getHours() - Number(store.weather.updated);

  if (timeRange >= 1 || store.weather.updated === null) {
    request(
      'http://api.openweathermap.org/data/2.5/weather?q=Surgut,ru&APPID=6f072517e35a614df8a7d1e2e5dc1ced',
      (err, _response, body) => {
        if (err) {
          return res.status(200).json(createResponse(500, { error: 'Ошибка при загрузке погоды' }));
        } else {
          body = Math.round(JSON.parse(body).main.temp - 273.15);

          store.weather.value = body;
          store.weather.updated = new Date().getHours();

          return res.status(200).json(createResponse(500, body, 'weather'));
        }
      },
    );
  } else {
    return res.status(200).json(createResponse(500, store.weather.value, 'weather'));
  }
};
