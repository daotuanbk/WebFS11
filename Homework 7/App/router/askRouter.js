const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.get('/', (req,res)=>{
    res.render('ask',{
        askRouter:'active',
        questionRouter: ''
    });
});


router.post('/',(req,res)=>{
    try {
        questionController.create(req.body.question,(data)=>{
            res.redirect('/question/info/' + data._id);
        })
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;