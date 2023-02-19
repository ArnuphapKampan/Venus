const config = require('../../../config');
const connection = config.connection;
const moment = require('moment');
moment.locale('th')
module.exports.documentNumberAuto = (value) => {

  return new Promise((resolve, reject) => {
    connection.query(`SELECT count(*) As count,
                        max(document_number) As document_number,
                        DATE_FORMAT(now(),"%y%m%d") As date_format,
                        DATE_FORMAT(create_date,"%y%m%d") As date_create
                      FROM contract 
                      WHERE document_format = ?
                      HAVING date_format = date_create  limit 1`,
    [value.document_format], 
    (err, result) => {
      let document_number = "";
      if(result.length > 0) {
        document_number =  result[0].document_number*1+1;
      }else{
        document_number =  moment().format('YYMMDD')+'001';
      }
        ((err)?reject(err):resolve(document_number))
    });
  });
}