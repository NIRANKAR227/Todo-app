const express=require('express');
const { testingcontroller } = require('../controllers/testcontroller');

//Router object-->A Router object in Express.js is a mini-application used to group routes, middleware, and logic in a modular way.
const router=express.Router();

// Routes
router.get('/test',testingcontroller);

//export
module.exports=router