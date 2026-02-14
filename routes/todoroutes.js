const express=require('express');

const authMiddleware = require('../middleware/authMiddleware');
const { createTodocontroller, getTdodcontroller, deleteTodocontroller, updateTodocontroller } = require('../controllers/todocontroller');

const router=express.Router();

router.post('/create',authMiddleware,createTodocontroller);
router.get('/getAll/:userId',authMiddleware,getTdodcontroller);
router.delete('/delete/:id',authMiddleware,deleteTodocontroller);
router.patch('/update/:id',authMiddleware,updateTodocontroller);

module.exports=router;