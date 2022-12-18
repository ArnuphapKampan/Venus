const config = require('../../config');
const connection = config.connection;

module.exports.userChangePassword = (req) => {
console.log(req)
  return new Promise((resolve, reject) => {
    connection.query("UPDATE user SET password = ? WHERE id = ?",[req.password,req.id],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}