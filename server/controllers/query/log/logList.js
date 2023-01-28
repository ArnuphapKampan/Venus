const config = require('../../../config');
const connection = config.connection;

module.exports.logList = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM log WHERE log_reference = ? order by log_id ASC",[id], (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}