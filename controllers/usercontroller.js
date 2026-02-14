const usermodel = require("../models/usermodel")
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')

const registercontroller=async(req,res)=>{
    try {
        const{username,email,password}=req.body
        //validation
        if(!username||!email||!password){
            res.status(400).send({
                success:false,
                message:'Provide all required field'
            })
        }
        //Check Existing User
        const existinguser= await usermodel.findOne({email})
        if(existinguser){
            res.status(500).send({
                success:false,
                message:'User Already Exist'
            })
        }

        // Encryption
        const salt=await bcrypt.genSalt(10);
        const hashedpassword=await bcrypt.hash(password,salt);
        
        // Save New User Detail
        const newuser=new usermodel({username,email,password:hashedpassword})
        await newuser.save()

        res.status(201).send({
            success:201,
            message:'User Registered Successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Register API',
            error
        })
    }
}

//Login
const logincontroller=async(req,res)=>{
    try {
        const {email,password}=req.body
        //find user
        const user=await usermodel.findOne({email})
        if(!user){
            res.status(404).send({
                success:false,
                message:'Invalid Email and Password'
            })
        }
        //Decryption
        const isuservalid=await bcrypt.compare(password,user.password);
        if(!isuservalid){

            res.status(401).send({
                success:false,
                message:'Invalid Credntial',
            })
        }
        const token= await jwt.sign({id:user._id},process.env.JWT_Secret)
        res.status(201).send({
            success:true,
            message:'Login Successfully',
            token,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Login Api',
            error
        })
    }
}

module.exports={registercontroller,logincontroller};