var fibo = [0 , 1];
for (var i = 2 ; i <= 12; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
     console.log(fibo[i],fibo[i-1],fibo[i-2]);
}
console.log("the fibonacci serices is : " + fibo);


// use function

function fibonacci(n){
    let fibo= [1,1];
    for(var i = 2; i<n; i++){
        fibo[i]= fibo[i-1] + fibo[i - 2];
        console.log(fibo[i],fibo[i-1],fibo[i-2]);
    }
    return fibo;
}
fibo = fibonacci(12);
console.log('the result is : ' + fibo);
