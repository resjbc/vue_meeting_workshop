const router = require('express').Router();
const {
    check
} = require('express-validator/check');
const {
    onRegister,onLogin
} = require('../services/account.js');

//หน้าลงทะเบียน
router.post('/register', [
    check('u_username').not().isEmpty(),
    check('u_password').not().isEmpty(),
    check('u_firstname').not().isEmpty(),
    check('u_lastname').not().isEmpty(),
], async (req, res) => {
    try {
        req.validate();
        const created = await onRegister(req.body);
        res.json(created);
    } catch (ex) {
        res.error(ex);
    }

});


//เข้าสู่ระบบ
router.post('/login', [
    check('u_username').not().isEmpty(),
    check('u_password').not().isEmpty()
], async (req, res) => {
    try {
        req.validate();
        const userLogin = await onLogin(req.body);
        req.session.userLogin = userLogin;
        res.json(userLogin);
    } catch (ex) {
        res.error(ex);
    }
});

/*router.get('/userLogin' , (req,res) => {
    res.json(req.session.userLogin);
})*/

module.exports = router;