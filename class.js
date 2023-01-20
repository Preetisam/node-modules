class Car{   //class
    #finalPrice;//private variable
    constructor(brandName,varient,manufacturing){  //parameterised constructor 
        this.brandName=brandName;
        this.varient=varient;
        this.manufacturing=manufacturing;
}


//constructor(color){       //parameter less  constructor
    //this.color = color;   //js doesnot support fun overloding /method overloding and has only one constructor in a class

//}
//constructor(){} // fun overloding means a 2 or more function with similar fun name but inceasresing and decresing in parameters.
//it consider ls last in first out

showManufacturingDate (){
    console.log(this.manufacturing)
} 
get price(){
    return this.#finalPrice 
}
set price(p){
    if(p<100000){return}
    this.#finalPrice = p -(0.1*p);
}

}
class ElectricCar extends Car{
    constuctor(brandName,manufacturing){
        super(brandName,"Electric",manufacturing);
        
        // this.brand =brandName;
        // this.manufacturing=manufacturing
        // this.varient ="Electrical"
    }get myElectricalprice(){
        return this.#finalPrice
    }
    set myElectricalprice(price){
        if(p<100000){return}
        this.#finalPrice = price -(0.1*price);
    }


    // showManufacturingDate (){
    //     console.log("manufacturing date ": this.manufacturing)
    // }
    // stop(){

    // }
    // start(){

    // }
}
    let modelY =new ElectricCar("Telsa","2022");

    for(let prop in modelY){
        console.log(modelY[prop])
    }
    modelY.showManufacturingDate();
     


let altroz=new Car("Tata","Petrol","2021");
altroz.price ="1000000";//setting the value
console.log(altroz.price)//gSetting the value
console.log(altroz.brandName)
//console.log(altroz.#finalPrize) //can not access the private variable
printAllCarDetails(altroz)
function printAllCarDetails(obj){
    for(let prop in obj){
        console.log(obj[prop]);
        console.log(prop);
    }
}

let PetrolCar = class{
    
} // class as a variable first class  member

