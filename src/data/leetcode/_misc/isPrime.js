
// isPrime(0)                          // false
// isPrime(1)                          // false
// isPrime(17)                         // true
// isPrime(10000000000000) 



const isPrime = number => {
    if (number === 0 || number === 1) { return false} 
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

console.log(isPrime(0));                        // false
console.log(isPrime(1));                         // false
console.log(isPrime(17));                         // true
console.log(isPrime(10000000000000));

