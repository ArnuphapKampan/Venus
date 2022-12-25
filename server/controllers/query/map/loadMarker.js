const config = require('../../../config');
const connection = config.connection;

module.exports.loadMarker = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT *, json_value(location_image,'$.url') as image FROM location WHERE enable='enable'", (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}