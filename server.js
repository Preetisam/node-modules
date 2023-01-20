let http = require("http");
let server =http.createServer((req,res)=>{
    let userName ={
        name:"preeti"
    };
    res.write(JSON.stringify(userName));
    res.end();

})
server.listen(8082,()=>{
    console.log("Server started")
})