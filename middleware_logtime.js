
let express = require("express");
let expressApp = express();

let logTime = (req,res,next) =>{
    console.log("Request time was " + Date.now())
    next();
} 
expressApp.use(logTime);

expressApp.get("/", (req,res)=>{
    res.write("Basic route");
    res.end()
})


expressApp.listen(8082,()=>{
    console.log("server is up and running")

})