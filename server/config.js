const mysql = require('mysql')
require('dotenv').config();

//Connect DB
const host = process.env.HOST_NAME
const user = process.env.USER
const password = process.env.PASSWD
const database = process.env.DATABASE
const timezone = process.env.TIME_ZONE

config = {
    host: host,
    user: user,
    password: password,
    database: database,
    timezone: timezone
 }
const connection = mysql.createConnection(config);
connection.connect((err) => {
    if(err) {
        console.log('Error connection to MySQL database = ',err);
        return;
    }
})

module.exports ={
    connection : mysql.createConnection(config) 
} 