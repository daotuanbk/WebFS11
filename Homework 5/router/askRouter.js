const express = require('express');
const app = express.Router();
const fileController = require('./fileController');

app.get('/', (req, res) => {
    res.render('ask');
});

app.post('/', (req, res) => {
    try {
        let questionList = [...fileController.readFileSync('./data.json')];
        let id = questionList.length + 1;
        let newQuestion = ({
            id: id,
            questionContent: req.body.question,
            yes: 0,
            no: 0
        });
        questionList.push(newQuestion);
        fileController.writeFile('./data.json', questionList, (err) => {
            if (err) {
                console.log(err)
            }
            res.redirect('/question/' + id);
        });

    } catch (ex) {
        console.log(ex);
    }
})

module.exports = app;