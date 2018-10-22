const mysql = require('mysql');
const connection = mysql.createPool({
    //connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'meeting_room_db',
    charset: 'utf8'
});

//connection.getConnection((err, connect) => console.log(err));

module.exports = connection;