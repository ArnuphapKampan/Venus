const config = require('../../config');
const connection = config.connection;

module.exports.logLogin = (data,status) => {

  return new Promise((resolve, reject) => {
    connection.query(
        `INSERT INTO log_login (log_username,log_IPaddress,log_date,status) VALUES (?,?,now(),?)`,

        [
          data.username,
          data.ipaddress,
          status,
        ], 

        (err,res) => {
            if(err) reject(err);
            resolve("Create Log successfully");
        }
    );
  });
}