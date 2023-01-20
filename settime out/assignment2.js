//open a file and then append
//  some content to the existing file

const fs = require("fs");
fs.open("test.txt","a",function(err,fd){
    if(err){
        console.log("cannot open the file");
        return;

    }
    fs.write(fd,"This the additional content",function(err,written,str){
        console.log(str);
        console.log(written);
    })
    

})