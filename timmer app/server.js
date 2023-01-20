let http =require("http");
let server =http.createSrever((req,res)=>{
    let userName={
        name:"preeti"
    };
    res.write(JSON.stringify(userName))
    res.write("hi form the server");
    res.end()
});
server.listen(8082,()=>{
    console.log("server started")
})