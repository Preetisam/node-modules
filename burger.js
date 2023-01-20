


function burger(){
    let clear =setInterval(() => {
        console.log("buger is ready ");
    },2000);
    console.log("perape is ready'");
    clearInterval(clear);

}
function sandwitch(){
    setInterval(() => {
        console.log("buger is ready ");
    },2000);
    console.log("Sandwitch burger")
}

burger();
sandwitch();
console.log("preparing burger");
