const config = require('../../config');
const connection = config.connection;

module.exports.updateTimeLogin = (username) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE user SET update_date = now() WHERE username = ?",[username],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}