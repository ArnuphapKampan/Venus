const config = require('../../../config');
const connection = config.connection;

module.exports.insertLog = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
        `INSERT INTO log 
                  ( log_time,
                    log_url,
                    log_reference,
                    log_engine,
                    log_status,
                    log_detail
                  ) VALUES (now(),?,?,?,?,?)`,

        [
          data.url,
          data.lastID,
          data.engine,
          data.status,
          JSON.stringify(data.detail),
        ], 

        (err,res) => {
            if(err) reject(err);
            resolve();
        }
    );
  });
}