const express = require("express");


const app = express();

const middleware1 = (req,res,next) => {
    console.log("middleware1");
    next();
}
const middleware2 = (req,res,next) => {
    console.log("middleware2");
    next();
}

app.use(middleware2)

app.get("/", middleware1, (req,res)=>{
    res.send("hellow");
})
app.get("/", (req,res)=>{
    res.send("hellow");
})
app.get("/", (req,res)=>{
    res.send("hellow");
})

app.listen( process.env.PORT || 9090 , ()=>{
    console.log("server is running");
})