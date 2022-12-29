const config = require('../../config');
const connection = config.connection;

module.exports.userRemoves = (req) => {

  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM user WHERE id = ? AND role <> 'admin'",[req],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}