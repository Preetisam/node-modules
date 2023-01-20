//regular expression are also knwon as pattern matching
// [0-9]{10} mobile number
//"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" email address ^ means start $ means end
//regular expression always start with farword slash(/^)
// in regular expression the back slash means excape the charecter(it looses its meaning )(/\user\/)
//(\d) meand digits if we want 2 digts (\d{2}), (\d+) means any number
//$ means end  
// you can access parameters using colon in reagualr expression u can access in parameter[1-9]
// in regular expression  get (/ \/user\/  /)bacckslash will excape the char
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
// expressApp.get("/user/:userId", (req,res)=>{
    expressApp.get(/^\/user\/(\d+)$/, (req,res)=>{
    
    res.write("This is my user "+ req.params[0])
    res.end();
})

expressApp.listen(8082,()=>{
    console.log("server is up and running")

})