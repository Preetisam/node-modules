const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(" this is  my best route")
})

app.listen(8082, () =>{
    console.log("the server is running on 8082 port")
})