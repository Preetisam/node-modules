function Car(brandName,varient,manufacturing){
    this.brandName=brandName;
    this.varient=varient;
    this.manufacturing=manufacturing;

}
function Truck(){}
let altroz=new Car("Tata","Petrol","2021");
//console.log(altroz.brandName)
//console.log(altroz instanceof Car);
//console.log(altroz instanceof Truck);
let swiftDesire =new Car("Maruti","Diesel","2019");
//console.log(swiftDesire instanceof Car);
printAllCarDetails(altroz)
printAllCarDetails(swiftDesire)
function printAllCarDetails(obj){
    for(let prop in obj){
        console.log(obj[prop]);
        //console.log(prop)
        //altroz["manufacturing"]
}

}