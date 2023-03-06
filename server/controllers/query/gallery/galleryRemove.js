const config = require('../../../config');
const connection = config.connection;

module.exports.galleryRemove = (req) => {

  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM gallery WHERE id = ?",[req],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}