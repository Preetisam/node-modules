//set timeout
function print(){
    
    console.log("Hello: i am a print method");

}
function close(){
    clearInterval(interval)
}
let interval=setTimeout(print,2000);
//close my interval after 10 sec

setInterval(close,10000);
//st interval