const config = require('../../config');
const connection = config.connection;

module.exports.checkUsername = (username) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT id,username,name,surname,role,json_value(image,'$.url') as image FROM user WHERE username = ?",[username], (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}