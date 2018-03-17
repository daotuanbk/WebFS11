const express = require('express');
const app = express.Router();
const fileController = require('./fileController');

app.get('/:id/:bool',(req,res)=>{
    let questionList = [...fileController.readFileSync('data.json')];
    let id = req.params.id;
    let bool = req.params.bool;
    if(bool == 'yes')  questionList[id].yes++;
    else if(bool = 'no') questionList[id].no++;
    fileController.writeFile('./data.json',questionList,(err) =>{
        if(err) throw err;
        res.redirect('/question/' + id);
    }
    )
})

module.exports = app;