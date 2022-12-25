const config = require('../../../config');
const connection = config.connection;

module.exports.insertLocation = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
        `INSERT INTO location (location_title,location_detail,location_image,latitude,longitude,setting_marker) VALUES (?,?,?,?,?,?)`,

        [
          data.title,
          data.detail,
          data.image,
          data.latitude,
          data.longitude,
          data.settingMarker,
        ], 

        (err,res) => {
            if(err) reject(err);
            resolve("Create Location successfully");
        }
    );
  });
}