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
 //parent route
expressApp.get("/", (req,res) =>{
    res.send(users).status(200);
    res.end();
})
expressApp.get(/^\/user\/(\d+)$/, (req,res)=>{
    let searcheduser = users.find((user)=>{
       return user.id == req.params[0]
    });
    res.send(searcheduser).status(200)
    res.end();


})
expressApp.post("/user",(req, res)=>{
    const user = req.body;
    let userID = userToAdd.id
    let isUserAlready =user.find((user)=>{
      return  user.id ==userID
    })
    users.push(user);
    res.send("user added").status(200)
    res.end();
})
expressApp.listen(8082,()=>{
    console.log("server is up and running")

})