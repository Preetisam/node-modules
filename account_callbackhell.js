function initialDeposit  (){
    console.log("minimum amount for inital deposit is 1000");
}
function ACoOwner (cb){
    console.log("applicatant /relative /spouse");
    cb();
}
function basicInformation (cb){
    console.log("your birthdate and phone number");
    cb(initialDeposit );
}
function IdValidation(cb){
    console.log("government-issued photo ID, such as a driver’s license or a passport");
    cb(ACoOwner);
}
function openBankAccount(){
    setTimeout(() => {
        IdValidation(basicInformation);
        console.log("succesfully opened an account")
    },1000)
}
openBankAccount();