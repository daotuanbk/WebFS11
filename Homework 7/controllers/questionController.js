const questionSchema = require('../models/questionSchema');

let create = (question,callback)=>{
    let newQuestion = {
        question: question,
    }
    questionSchema.create(newQuestion,(err,data)=>{
        if(err) console.log(err);
        callback(data);
    });
};

let loadData = (callback) =>{
    questionSchema.find((err,data)=>{
        if(err) console.log(err);
        callback(data);
    })
}

let findId = (id,callback) =>{
    questionSchema.findById(id,(err,data)=>{
        if(err) console.log(err);
        callback(data);
    })
}

let showVote = (bool,id,callback)=>{
    if(bool === 'yes'){
        findId(id,(data)=>{
            questionSchema.findByIdAndUpdate(id,{yes:data.yes+1},(err) =>{
                callback(err);
            })
        })
    }
        
    else{
        findId(id,(data)=>{
            questionSchema.findByIdAndUpdate(id,{no:data.no+1},(err) =>{
                callback(err);
            })
        })
    }
}


module.exports = {
    create,
    loadData,
    findId,
    showVote
}