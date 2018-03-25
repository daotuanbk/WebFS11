const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.get('/:id/:bool',(req,res)=>{
    let id = req.params.id;
    let bool = req.params.bool;
    questionController.showVote(bool,id,(err)=>{
        if(err) console.log(err);
        res.redirect('/question/info/' + id);
    })
})

module.exports = router;