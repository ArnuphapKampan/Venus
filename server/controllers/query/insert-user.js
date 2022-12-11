const config = require('../../config');
const connection = config.connection;

module.exports.insertUser = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
        `INSERT INTO user (name,surname,username,password,image,role,update_date,enable) VALUES (?,?,?,?,?,?,now(),?)`,

        [
          data.name,
          data.surname,
          data.username,
          data.password,
          data.image,
          data.role,
          (data.role == "admin")?"enable":"disable"
        ], 

        (err,res) => {
            if(err) reject(err);
            resolve("Create account successfully");
        }
    );
  });
}