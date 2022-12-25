const config = require('../../../config');
const connection = config.connection;

module.exports.locationInfo = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT *, json_value(location_image,'$.url') as image, json_value(location_image,'$.public_id') as public_id FROM location WHERE location_id = ?", [id], (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}