const config = require('../../config');
const connection = config.connection;

module.exports.checkUsername = (username) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT id,name,surname,username,role,image FROM user WHERE username = ?',[username], (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}