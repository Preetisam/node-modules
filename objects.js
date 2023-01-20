let student = {
    name:"elena Grace",
    subjects:{
        physics:80,
        chemistry:79;
    }
    
}
for(let prop in student.subjects){
    console.log(prop);

}
console.log(student.hasOwnProperty("lastName"))


let obj2= new Object();
let obj3= Object.create();
