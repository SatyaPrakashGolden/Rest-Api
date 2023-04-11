const mongoose=require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0/students-api",{
//     useCreateIndex:true,
//     useNewUrlparser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("connection is sucessful");
// }).catch((e)=>{
//     console.log("No connection");
// });
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0/studentapi")  //test is database name
.then(()=>console.log("connected mongodb"))
.catch((err)=>console.log(err));
