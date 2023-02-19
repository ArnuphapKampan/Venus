const config = require('../../../config');
const connection = config.connection;

module.exports.documentNumberDuplicate = (value) => {

  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM contract WHERE document_format = ? AND document_number = ? ",
    [value.document_format, value.document_number], 
    (err, result) => {
        ((err)?reject(err):resolve(result))
    });
  });
}