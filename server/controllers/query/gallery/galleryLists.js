const config = require('../../../config');
const connection = config.connection;

module.exports.galleryLists = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT *, json_value(image,'$.url') as picture, json_value(image,'$.public_id') as public_id FROM gallery ORDER BY id ASC", (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}