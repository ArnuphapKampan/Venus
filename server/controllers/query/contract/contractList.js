const config = require('../../../config');
const connection = config.connection;

module.exports.contractLists = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM contract ORDER BY id ASC", (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}