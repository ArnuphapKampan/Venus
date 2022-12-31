const config = require('../../../config');
const connection = config.connection;

module.exports.listMessages = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM message ORDER BY read_status ASC, date_send ASC", (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}