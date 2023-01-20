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
expressApp.get("/user/:userId", (req,res)=>{
    res.write("This is my user"+ req.params.userId)
    res.end();
})

expressApp.listen(8082,()=>{
    console.log("server is up and running")

})