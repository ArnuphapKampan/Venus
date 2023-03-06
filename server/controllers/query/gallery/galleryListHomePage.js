const config = require('../../../config');
const connection = config.connection;

module.exports.galleryListHomePage = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT *, json_value(image,'$.url') as picture, json_value(image,'$.public_id') as public_id FROM gallery WHERE enable = ? ORDER BY id ASC",['enable'], (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}