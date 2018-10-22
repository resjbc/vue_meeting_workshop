const express = require('express');
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const { check, validationResult } = require('express-validator/check');
const server = express();
const PORT = 3000;

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

server.post('/',[
  check('firstname').not().isEmpty(),
  check('lastname').not().isEmpty()    
], (req, res) => {
    try {
        validationResult(req).throw();
        res.json(req.body);
    }catch (ex) {
        res.status(400).json({message: ex.message});
    }
})

/*server.get('/s', (req, res) => {
    req.session.item = 'Hello World';
    res.end('set Session');
})*/

server.get('*', (req, res) => {
    /*res.json({
        message: 'Backend Server is Started'
    });*/
    res.end(`<h1>Backend Server is Started. session is ${req.session.item}</h1>`)
});

server.listen(PORT, () =>
    console.log(`Server is started Port ${PORT}`)
);