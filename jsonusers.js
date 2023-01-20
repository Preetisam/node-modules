
let express = require("express");
let expressApp = express();

let users = [{
    id: 123,
    name: "preeti"
},
{
    id: 341,
    name: "Elena"

}
]
 
expressApp.get("/", (req,res) =>{
    res.send(users).status(200);
    res.end();

})


expressApp.listen(8082,()=>{
    console.log("server is up and running")

})