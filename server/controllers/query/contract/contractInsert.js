const config = require('../../../config');
const connection = config.connection;

module.exports.contractInsert = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
        `INSERT INTO contract 
                  (contact_id,
                   document,
                   document_format,
                   document_number,
                   create_date,
                   detail,
                   section_1,
                   section_2,
                   section_3,
                   section_4,
                   installment
                  ) VALUES (?,?,?,?,now(),?,?,?,?,?,?)`,

        [
          data.contact_id,
          data.document,
          data.document_format,
          data.document_number,
          JSON.stringify(data.detail),
          JSON.stringify(data.section_1),
          JSON.stringify(data.section_2),
          JSON.stringify(data.section_3),
          JSON.stringify(data.section_4),
          JSON.stringify(data.installment),
        ], 

        (err,res) => {
            if(err) reject(err);
            resolve(res.insertId);
        }
    );
  });
}