const config = require('../../../config');
const connection = config.connection;

module.exports.locationEnable = (req) => {

  return new Promise((resolve, reject) => {
    connection.query("UPDATE location SET enable = ? WHERE location_id = ?",[req.enable,req.key],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}