var result = 1;
function factorial(num){
    let i;
    for(i = 1; i<=num; i++){
        result = result * i;
        console.log(i, result);
       
    }
    console.log(num +" "+ "the factorial number is :" + result);
    return result;
}


var total = factorial(8);
console.log("The factorial number : " + total);

