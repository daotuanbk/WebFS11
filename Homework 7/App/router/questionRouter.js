const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');


router.get('/',(req,res) => {
    questionController.loadData((data)=>{
        if(data.length==0){
            res.redirect('/empty');
        }
        else{
            let random = Math.floor(Math.random()*(data.length));
            let id = data[random]._id;
            res.render('home', {
                questionContent:{
                    content :  data[random].question,
                    id : id,
                    yes: data[random].yes,
                    no: data[random].no
                },
                askRouter:'',
                questionRouter: 'active'
            });
        }
    });
});

router.get('/info/:id',(req,res)=>{
    let ID = req.params.id;
    questionController.findId(ID,(data)=>{
        if(data.yes==data.no){
            res.render('questionInfo',{
                questionInfo:{
                    content: data.question,
                    id: ID,
                    sum: data.yes + data.no,
                    yes: 50,
                    no: 50,  
                },
                askRouter:'',
                questionRouter: 'active'
            })
        }
        else{
            res.render('questionInfo',{
                questionInfo:{
                    content: data.question,
                    id: ID,
                    sum: data.yes + data.no,
                    yes: Math.round(parseFloat(data.yes/(data.yes + data.no)*100)*100)/100, //toFixed(2)
                    no: Math.round(parseFloat(data.no/(data.yes + data.no)*100)*100)/100,
                    
                },
                askRouter:'',
                questionRouter: 'active'
            })
        }
    });
});

router.get('/empty',(req,res)=>{
    res.render('empty');
})



module.exports = router;