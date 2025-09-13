const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    dueDate:{
        type:String,
        require:true
    }
});

const todoModel=mongoose.model('todoModel',todoSchema);
module.exports=todoModel;