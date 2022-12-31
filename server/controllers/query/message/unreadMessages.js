const config = require('../../../config');
const connection = config.connection;

module.exports.unreadMessages = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT msg_id FROM message WHERE read_status = '0'", (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}