const config = require('../../../config');
const connection = config.connection;

module.exports.addGallery = (data) => {
  return new Promise((resolve, reject) => {
    data.forEach(function (value, key) {
      connection.query(
          `INSERT INTO gallery 
                    ( image,
                      category,
                      enable,
                      update_date
                    ) VALUES (?,?,?,now())`,

          [
            JSON.stringify(value),
            '',
            'enable',
          ], 

          (err,res) => {
              if(err) reject(err);
              if(key+1 === data.length) resolve();
          }
      );
    })
  });
}