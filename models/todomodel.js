const mongoose=require('mongoose');

const todoschema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    iscompleted:{
        type:Boolean,
        require:true,
        default:false
    },
    createdby:{
        ref:'users',
        type:mongoose.Schema.ObjectId
    }
},{timestamps:true})

const todoModel=mongoose.model('todo',todoschema)

module.exports=todoModel;