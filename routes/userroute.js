const express=require('express');
const { registercontroller, logincontroller } = require('../controllers/usercontroller');

const router=express.Router();

//Register||post
router.post("/register",registercontroller);

// Login||post
router.post("/login",logincontroller)



module.exports=router;