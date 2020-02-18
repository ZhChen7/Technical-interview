function isPrime(num) {
    let temp = parseInt(Math.sqrt(num))
    for (let i = 2; i <= temp; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}




console.log(isPrime(5))
