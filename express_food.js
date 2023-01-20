let express = require("express");
let expressApp = express();
//hhttp call base route
expressApp.get("/food", (req,res)=>{
    res.write("This is my grocery route")
    res.end();
})
expressApp.get("/clothing", (req,res)=>{
    res.write("This is my clothing route")
    res.end();
})
expressApp.listen(8082,()=>{
    console.log("server is up and running")

})