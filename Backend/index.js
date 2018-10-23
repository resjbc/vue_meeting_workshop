const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
//const { check, validationResult } = require('express-validator/check');
const server = express();
const routes = require('./routes');
const PORT = 3000;

const connect = require("./configs/database");

connect.query('show tables',(err,result) => {console.log(result);})

// ตั้งค่า Session สำหรับระบบ
server.use(expressSession({
    secret: 'hitman',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

// ตั้งค่าการ parse ตัวแปรเมื่อ Client ส่งข้อมูลเข้ามา
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())


//เรียกใช้งาน routes
server.use('/api',routes)

server.get('*', (req, res) => {
    res.end(`<h1>Backend Server is Started. session is ${req.session.item}</h1>`)
});

server.listen(PORT, () =>
    console.log(`Server is started Port ${PORT}`)
);