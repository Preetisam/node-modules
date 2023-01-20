class Car{
    constructor(brandName, variant, manufacturing){  //parameteized constructor
        this.brandName = brandName;
        this.variant = variant;
        this.manufacturing = manufacturing;
    
    constructor() //default parameterized constructor
        this.color="red"; 
        this.color="blue"
    }
    }
    
    
    let bentlyFlyingSpur = new Car("bently", "Petrol", "sedan","color");
    let mercedesBenzCClass = new Car("mercedesBenz", "Diesel" , "SUV","color");
    
    printAllCarDetails(bentlyFlyingSpur);
    printAllCarDetails(mercedesBenzCClass);
    
    function printAllCarDetails(obj){
        for(let prop in obj){
            console.log(obj[prop]);
        }
    }
    
    
    
    
    