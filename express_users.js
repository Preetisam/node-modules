let express = require("express");
let expressApp = express();
//hhttp call base route
expressApp.get("/", (req,res)=>{
    res.write("This is my grocery route")
    res.end();
})
expressApp.get("/user", (req,res)=>{
    res.write("This is user route")
    res.end();
})
expressApp.get("/user/1", (req,res)=>{
    res.write("This is my user1  route")
    res.end();
})
expressApp.get("/user/2", (req,res)=>{
    res.write("This is my user2 route")
    res.end();
})
expressApp.listen(8082,()=>{
    console.log("server is up and running")

})