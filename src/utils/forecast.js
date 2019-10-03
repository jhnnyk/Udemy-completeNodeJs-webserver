const request = require('request');

const forecast = (lat, long, callback) => {
  const url =
    'https://api.darksky.net/forecast/a39b2fd254a7eab701964331d2d240c9/' +
    lat +
    ',' +
    long;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ' It is currently ' +
          body.currently.temperature +
          ' degrees out. There is a ' +
          body.currently.precipProbability +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;
