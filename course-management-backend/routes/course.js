const express = require('express');
const router = express.Router();
const db = require('../db');

//Get all courses
router.get('/courses', (req, res) => {
    let sql = 'SELECT * FROM course';
    db.query(sql ,(err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//Add a course
router.post('/course', (req, res) => {
    const { cname, fees, duration } = req.body;
    let sql = 'INSERT INTO course (cname, fees, duration) VALUES (?, ?, ?)';
    db.query(sql, [cname, fees, duration], (err, result) => {
        if (err) throw err;
        res.json({ success: true, message: 'Course added successfully'});
    });
});

//Update a course
router.put('/course/:id', (req, res) => {
    const {id} =req.params;
    const {cname, fees, duration} = req.body;
    let sql = 'UPDATE course SET cname = ?, fees = ?, duration = ? WHERE cid = ?';
    db.query(sql, [cname, fees, duration, id], (err, result) => {
        if (err) throw err;
        res.json({success:true, message: 'Course updated successfully'});
    });
});

//Delete a course 
router.delete('/course/:id', (req, res) => {
    const {id} = req.params;
    let sql = 'DELETE FROM course WHERE cid = ?';
    db.query(sql, [id], (err, result) => {
        if(err) throw err;
        res.json({success: true, message: 'Course deleted succesfully'});
    });
});

module.exports = router;