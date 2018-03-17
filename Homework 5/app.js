const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController');
const askRouter = require('./router/askRouter');
const questionRouter = require('./router/questionRouter');
const voteRouter = require('./router/voteRouter');
const fs = require('fs');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

var data = [...fileController.readFileSync('data.json')];

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/', questionRouter);
app.use('/ask', askRouter);
app.use('/question', questionRouter);
app.use('/vote', voteRouter);

app.listen(1000, (err) => {
    if (err) console.log(err);
    console.log("App is start at port 1000");
});