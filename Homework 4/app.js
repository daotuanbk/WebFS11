// const fs = require('fs');

// //fs.readFile

// let dataFromFile = fs.readFileSync('package.json', {encoding: 'UTF-8'});
// console.log(dataFromFile);

// fs.readFile('package.json', {encoding: 'UTF-8'}, (error, data) => {
//     if(error) {
//         console.log(error);
//     }
//     console.log(data);
// }
// );

// let dataWriteFile = {
//     a:5 ,
//     b:6
// };

// fs.writeFile('text.txt', JSON.stringify(dataWriteFile), (error)=>{
//     if (error){console.log(error); }
//     console.log("Write file success!");
// }) 

// fs.readFile('text.txt', {encoding: 'UTF-8'}, (error, data) => {
//     if(error) {
//         console.log(error);
//     }
//     console.log("Data: "+JSON.parse(data));
//     console.log(objectData[Object.keys(objectData)[0]])
// }
// );



// let fs = require('./fileControler');

// console.log(fs);

// fs.readFile('text.txt', (fileData)=>{
//     console.log(fileData);
// })


const express = require('express');
let app = express();
app.use(express.static("public"));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/frontendpractice', (req, res)=> {
    res.sendFile(__dirname + '/public/frontendpractice.html')
})

app.get('/flexbox', (req, res)=> {
    res.sendFile(__dirname + '/public/flexbox.html')
})

app.get('/about', (req, res)=> {
    res.send("This is about")
})

app.get('/gift', (req, res)=> {
    res.send("Hello it's gift");
})

app.listen(6969, (err) => {
    if(err) {console.log(err);}
    console.log("App is start at port 6969");
})