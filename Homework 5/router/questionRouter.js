const express = require('express');
const app = express.Router();
const fileController = require('./fileController');

app.get('/', (req,res)=> {
    let questionList = [...fileController.readFileSync('data.json')];

    if (questionList.length == 0) {
        res.redirect('/empty');
    }
    else {
        let id = Math.floor(Math.random()*(questionList.length));
        question = questionList[id].questionContent;
        yes = questionList[id].yes;
        no = questionList[id].no;
        ID = id;
    }
    res.render('home', {
        questionInfo: {
            content: question,
            id: ID,
            yes: yes,
            no: no
        }
    })
})

app.get('/question/:id', (req, res) => {
    try {
        let questionList = [...fileController.readFileSync('./data.json')];
        let id = req.params.id
        let question = questionList[id];
        res.render('questionInfo', {
            questionInfo: {
            content: question.questionContent,
            id: req.params.id,
            yes: question.yes,
            no: question.no
            }
        });
    } catch (ex) {
        console.log(ex);
    }
})

app.get('/empty',(req,res)=>{
    res.render('empty');
})

module.exports = app;