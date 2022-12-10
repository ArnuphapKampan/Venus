const config = require('../../config');
const connection = config.connection;

module.exports.userApprovs = (req) => {

  return new Promise((resolve, reject) => {
    connection.query("UPDATE user SET enable = ? WHERE id = ? and username <> ?",[req.enable,req.key,'admin'],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}