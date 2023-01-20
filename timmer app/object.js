class Laptop{
    constructor(brandName,display,processor,opreatingSystem){
    this.brandName=brandName;
    this.display=display;
    this.processor=processor;
   this.opreatingSystem=opreatingSystem;
}
}

let laptop1 = new Laptop("MacBook Air","13 inch"," 1.8 Dual-Core Intel Core i5","Mac Os Monterey" );
let laptop2 = new Laptop("Dell Inspiron","15.6 inch","Intel i5-1135G7 4-cores","Windows 11");




console.log(laptop1 instanceof Laptop);



let laptop=new Object();
laptop.brandName="MacBook Air",
laptop.display="13 inch",
laptop.processor=" 1.8 Dual-Core Intel Core i5",
laptop.opreatingSystem="Mac Os Monterey"
console.log(laptop.brandName)

let Laptopt ={
    brandName :"MacBook Air",
    display: "13.3-inch",
    Processor: "1.8 GHz Dual-Core Intel Core i5",
    operatingSystem:"macOS Monterey"
}

let laptop ={
    brandName:"Dell Inspiron",
    display:"15.6 inch",
    processor:"Intel i5-1135G7 4-cores",
    opreatingSystem:"Windows 11"
}
//Accessing properties by dot method 
console.log(laptop.brandName);
console.log(laptop.display);
//Accessing properties by array elemnts 
console.log(laptop["opreatingSystem"]);
console.log(laptop["processor"]);
////Accessing properties by logging in the console
console.log("laptop proreties: ");
console.log(laptop)
