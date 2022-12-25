const config = require('../../../config');
const connection = config.connection;

module.exports.locationUpdate = (req) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE location SET location_title = ?, location_detail = ?, latitude = ?, longitude = ?, location_image = ?, setting_marker = ? WHERE location_id = ?",
    [
      req.title,
      req.detail,
      req.latitude,
      req.longitude,
      req.image,
      req.settingMarker,
      req.id
    ],(err,res) => {
            (err)?reject(err):resolve(res);
    });
  });
}