const config = require('../../../config');
const connection = config.connection;

module.exports.locationRemove = (req) => {

  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM location WHERE location_id = ?",[req],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}