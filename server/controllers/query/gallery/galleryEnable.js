const config = require('../../../config');
const connection = config.connection;

module.exports.galleryEnable = (req) => {

  return new Promise((resolve, reject) => {
    connection.query("UPDATE gallery SET enable = ? WHERE id = ?",[req.enable,req.key],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}