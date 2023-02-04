const config = require('../../../config');
const connection = config.connection;

module.exports.contractUpdates = (data) => {

  return new Promise((resolve, reject) => {
    connection.query(
        `UPDATE contract SET  
                   contact_id = ?,
                   document = ?,
                   document_format = ?,
                   document_number = ?,
                   update_date = now(),
                   detail = ?,
                   section_1 = ?,
                   section_2 = ?,
                   section_3 = ?,
                   section_4 = ?,
                   installment = ?
                  WHERE id = ?`,

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
          data.id
        ], 

        (err,res) => {
            if(err) reject(err);
            resolve(data.id);
        }
    );
  });
}