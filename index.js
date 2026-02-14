const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
const cors=require('cors');
const ConnectDB=require('./configuration/db')


//env config
dotenv.config();

const app=express()

//Connect database
ConnectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

//routes
/*app.get('/test',(req,res)=>{
    res.status(200).send("<h1>Welcome to Todo Project using nodemon</h1>")
}) */

// Routes for mvc 
app.use('/api/v1',require('./routes/testroutes'));
app.use('/api/v1/user',require('./routes/userroute'))

app.use('/api/v1/todo',require('./routes/todoroutes'))

//port
const port=process.env.PORT || 8080;

//listen
app.listen(port,()=>{
    console.log(`Node Server Running on ${process.env.Dev_mode} mode on port no ${port}`);
})