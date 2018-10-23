const router = require('express').Router();

//หน้าลงทะเบียน
router.post('/register' , (req,res) => {
    res.json({page: 'register page'})
});

module.exports = router;