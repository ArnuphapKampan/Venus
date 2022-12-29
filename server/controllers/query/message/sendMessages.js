const config = require('../../../config');
const connection = config.connection;

module.exports.sendMessages = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
        `INSERT INTO message (msg_name,msg_email,msg_telephone,msg_description,date_send) VALUES (?,?,?,?,now())`,
        [
          data.name,
          data.email,
          data.telephone,
          data.description,
        ], 
        (err,res) => {
            if(err) reject(err);
            resolve(res);
        }
    );
  });
}