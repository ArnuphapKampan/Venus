const config = require('../../config');
const connection = config.connection;

module.exports.checkLogin = (username) => {
  return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE username = ?',[username], (err, result) => {
        ((err)?reject(err):resolve(result))
      });
  });
}