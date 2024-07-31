const express = require('express');
const router = express.Router();
const db = require('../db');

//User Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    let sql = 'SELECT * FROM user WHERE email = ? AND password = ?' ;
    db.query(sql,[email, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.json({success:true, message: 'Login succesful'});
        } else {
            res.json({success:false, message: 'Invalid Credentials'});
        }
    });
});

module.exports = router;