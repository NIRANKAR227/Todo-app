const mongoose=require('mongoose');

ConnectDB= async()=>{
    try {
        const conn=await mongoose.connect(process.env.Mongo_url,{
            dbName: "todoDB"
        });
        console.log(`Connected to databse ${mongoose.connection.host} Have name ${mongoose.connection.name}`);
    } catch (error) {
        console.log(`Mongo error ${error}`);
    }
}

module.exports=ConnectDB;