const config = require('../../config');
const connection = config.connection;

module.exports.insertUser = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
        `INSERT INTO user (name,surname,username,password,role,update_date) VALUES (?,?,'${data.username}',?,'staff',now())`,

        [
          data.name,
          data.surname,
          data.password
        ], 

        (err,res) => {
            if(err) reject(err);
            resolve("Create account successfully");
        }
    );
  });
}