function Car(brandName,variant,manufacturing){
    this.brandName = brandName;
    this.variant=variant;
    this.manufacturing=manufacturing;
    }
    //let manufacturing ="1989"
    //console.log(this); here in node js there is no gobal context node js run by modules
    
    //this key word means current context
    Car.prototype.showCarDeatails=function(){
        console.log(this.brandName+ " has " +this.variant)
    function showManufacturingDate(){
        console.log("The car was manufactured in year "+ this["manufacturing"]);
    
    } //here the manufacturing date is not linked with the car so we get error
    
    }
    let altroz=new Car("Tata","Petrol","2021");
    let swiftDesire =new Car("Maruti","Diesel","2019");
    altroz.showCarDeatails();//altroz will link to car protypla chanining
    //showManufacturingDate();//its is not linked with car should belong to prototypal chain
    //showManufacturingDate.call(altroz);// .call is the method used when fun is not linked prototypally we can aceess the this context
    showManufacturingDate.call(swiftDesire);