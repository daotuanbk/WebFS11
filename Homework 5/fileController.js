const fs = require('fs');

let readFile = (path, onReadFileDone) => {
    fs.readFile(path, 'UTF-8', (err,data)=>{
        if(err) {console.log(err);}
        onReadFileDone(data);
    });
}

let writeFile = (path, writedata ,onWriteDataSuccess) => {
    fs.writeFile(path,JSON.stringify(writedata), onWriteDataSuccess )
    }


let readFileSync = (path) => {
    return JSON.parse(fs.readFileSync(path, 'UTF-8'));
}

module.exports = {
    readFile,
    writeFile,
    readFileSync
}