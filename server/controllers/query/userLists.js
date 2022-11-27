const config = require('../../config');
const connection = config.connection;

module.exports.userLists = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT *, json_value(image,'$.url') as profile FROM user ", (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}