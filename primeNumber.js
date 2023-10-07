function isprime(n){
    for(var i = 2 ; i < n ; i++){
        if(n % i == 0)
            return 'the number is not a prime number';
    }
    return 'the number is a prime number'
}

var result = isprime(11);
console.log(result);