const express=require('express');
const app=express();
const port=process.env.PORT|| 5000;
app.use(express.json());
const Student=require('./models/student')
require("./db/conn")
app.get("/",(req,res)=>{
  res.send("hi there")
});
app.post("/student",(req,res)=>{
    // const user=new Student(req.body);
    (req.body).save().then(()=>{
        res.status(201).send(req.body);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    console.log(req.body);
    res.send("Hello, from the other side");
})

app.listen(port,function(){
    console.log("Server at 5000")
});
