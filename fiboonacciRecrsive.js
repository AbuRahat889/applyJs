function fibonacci(n){
    if(n==0){
        return 0;
    }
    else if(n == 1)
        return 1;
    else
        return fibonacci(n-1) + fibonacci(n-2);
}
var result = fibonacci(12);
console.log('fibonacci result is :' +  result);

// Recursive dhara

function fibonacciRe(n){
    if(n==0)
        return [0];
    else if(n==1)
        return [0,1];
    else{
        var fibo = fibonacciRe(n-1);
        var result = fibo[n - 1] + fibo[n - 2];
        fibo.push(result);
        return fibo;
    }
}

var Result = fibonacciRe(12);
console.log('the fibonacci array is : ' + Result);
