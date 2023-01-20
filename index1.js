const { write } = require("fs");
let http =require("http");
let server =http.createSrever((req,res)=>{
    write("this is working")
    switch (req.url) {
        case "/grocery":
            res.write("this is Grocery  route")
            break;
            case "/clothing":
                res.write("this is clothing route ")
    
        default:
            res.write("this is ")
            break;
    }
});
res.end()
server.listen(8082,()=>{
    console.log("server started")
})
