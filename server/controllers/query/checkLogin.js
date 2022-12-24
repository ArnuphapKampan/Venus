const config = require('../../config');
const connection = config.connection;

module.exports.checkLogin = (username) => {
  return new Promise((resolve, reject) => {
      connection.query('SELECT *,json_value(image,"$.url") as profile FROM user WHERE username = ?',[username], (err, result) => {
        ((err)?reject(err):resolve(result))
      });
  });
}