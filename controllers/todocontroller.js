const todoModel = require("../models/todomodel")


//Create Todo
const createTodocontroller=async(req,res)=>{
    try {
        const {title,description,createdby}=req.body

        if(!title||!description){
            return res.status(500).send({
                success:false,
                message:"Provide title or description"
            })
        }
        const todo = new todoModel({title,description,createdby})
        const result= await todo.save();
        return res.status(201).send({
            success:true,
            message:"your task has been created",
            result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in creating todo app",
            error
        })
    }
}

//Get todo
const getTdodcontroller=async(req,res)=>{
    try {
        //get userid
        const {userId}=req.params;
        if(!userId){
            return res.status(404).send({
                success:false,
                message:"No User Found with this Id"
            })
        }
        const todos=await todoModel.find({createdby:userId})
        if(!todos){
            return res.status(404).send({
                success:false,
                message:"you have no todos"
            })
        }
        return res.status(200).send({
            success:true,
            message:"your todos",
            todos
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in Fetching Todo api",
            error
        })
    }
}

//Delete Todo

const deleteTodocontroller= async(req,res)=>{
    try {
        const {id}=req.params
        if(!id){
            return res.status(404).send({
                success:false,
                message:"No todo found with this id"
            })
        }
        const todo= await todoModel.findByIdAndDelete({_id:id});
        if(!todo){
            return res.status(404).send({
                success:false,
                message:"No task found"
            })
        }
        res.status(200).send({
            success:true,
            message:"Your Task Has Been Deleted"
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status:false,
            message:"Error in deleting todo api",
            error
        })
    }
}

const updateTodocontroller= async(req,res)=>{
    try {
        const {id}=req.params;
        if(!id){
            return res.status(404).send({
                success:false,
                message:"No todo found with this id"
            })
        }
        const data=req.body;
        const todo=await todoModel.findByIdAndUpdate(
            id,
            {$set:data},
            {returnOriginal:false}
        );
        res.status(200).send({
            success:true,
            message:"Your Task Has Been Updated"
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status:false,
            message:"Error in deleting todo api",
            error
        })
    }
}

module.exports={createTodocontroller,getTdodcontroller,deleteTodocontroller,updateTodocontroller};