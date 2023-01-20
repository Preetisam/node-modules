
let express = require("express");
let expressApp = express();

let logTime = (req,res,next) =>{
    console.log("Request time was " + Date.now())
    next();
} 


let logUrl = (req,res,next)=>{
    console.log("Request Url is " + req.originalUrl)
    next();
}
let logError = (req,res,next)=>{
    console.log("Error is " + err)
    next();
}

expressApp.use(logTime);
expressApp.use(logUrl);
expressApp.use(logError);

expressApp.get("/user", (req,res) => {
    res.write("User route");
    res.end();
})


expressApp.listen(8082,()=>{
    console.log("server is up and running")

})