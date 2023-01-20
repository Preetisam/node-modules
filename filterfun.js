let filter =function(arr){
    let output =[];
    for(let i=0;i<arr.length-1;i++){
        let value =callback(arr[i])
        console.log(value)
        if(value)
        callback (arr[i]);
    }
    return output;
}
let arr =[2,4,-1,-10,4]
let postives =filter(arr,getPostiveNumbers)
let neagtive =filter(arr,getNegativesNumbers)
let even=filter(arr.getEvenNumber)

let postives =filter(arr,function(item){
    return item>0?item :""
    
})
function getNegativesNumbers =filter(arr,function(item0){
    if(item<0)
    return item;

})
console.log(postives);
console.log(negatives);
console.log(even);
