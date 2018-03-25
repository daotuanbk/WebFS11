const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Controller = require('./Controller');
const askRouter = require('./router/askRouter');
const questionRouter = require('./router/questionRouter');
const voteRouter = require('./router/voteRouter');
const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/kaeldb',(err)=>{
    if(err) console.log(err);
    console.log("Database connected!");
});

let app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

var data = [...Controller.readFileSync('data.json')];

app.use('/',questionRouter);
app.use('/ask',askRouter);
app.use('/question',questionRouter);
app.use('/vote',voteRouter);

app.listen(1900,(err)=>{
    if(err) console.log(err);
    console.log('App is on port 1900');
});
