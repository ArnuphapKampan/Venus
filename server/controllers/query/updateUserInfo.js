const config = require('../../config');
const connection = config.connection;

module.exports.updateUserInfo = (req) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE user SET name = ?, surname = ?, username = ?, image = ?, role = ? WHERE id = ?",
    [
      req.name,
      req.surname,
      req.username,
      req.image,
      req.role,
      req.id
    ],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}