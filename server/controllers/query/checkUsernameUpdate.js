const config = require('../../config');
const connection = config.connection;

module.exports.checkUsernameUpdate = (id,username) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT id,username,role,json_value(image,'$.url') as image FROM user WHERE username = ? AND id <> ?",[username,id], (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}