let http = require("http");
let server =http.createServer((req,res)=>{
    
    res.write("This is working");
    switch (req.url) {
        case "/grocery":
            res.write("This is Grocery routes")
            break;
            case "/clothing":
            res.write("This is clothing page")
            break;
        default:
            res.write("This is the home page")
            break;
    }
    res.end();

})
server.listen(8082,()=>{
    console.log("Server is up and running")
})