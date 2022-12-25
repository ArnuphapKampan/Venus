const config = require('../../../config');
const connection = config.connection;

module.exports.locationLists = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT *, json_value(location_image,'$.url') as image, json_value(location_image,'$.public_id') as public_id FROM location ORDER BY location_id ASC", (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}