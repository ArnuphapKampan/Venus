const config = require('../../config');
const connection = config.connection;

module.exports.userInfo = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT *, json_value(image,'$.url') as profile, json_value(image,'$.public_id') as public_id FROM user WHERE id = ?", [id], (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}