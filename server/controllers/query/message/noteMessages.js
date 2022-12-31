const config = require('../../../config');
const connection = config.connection;

module.exports.noteMessages = (req) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE message SET msg_note = ?,date_read = now(), read_status = ? WHERE msg_id = ?",
    [
      req.note,
      1,
      req.key
    ],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}