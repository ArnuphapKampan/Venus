const config = require('../../../config');
const connection = config.connection;

module.exports.contractReads = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM contract WHERE id = ?", [id], (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}