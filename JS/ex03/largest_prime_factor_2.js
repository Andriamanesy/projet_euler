function sieve(limit) {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i)
                isPrime[j] = false;
        }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) primes.push(i);
    }
    return primes;
}

function largest_prime_factor(n) {
    const limit = Math.floor(Math.sqrt(n));
    const primes = sieve(limit);

    let result = n;
    let maxPrime = 1;

    for (const p of primes) {
        if (p * p > result) break;
        while (result % p === 0) {
            maxPrime = p;
            result /= p;
        }
    }

    return result > 1 ? result : maxPrime;
}


console.time("largest_prime_factor");
console.log(largest_prime_factor(600851475143));
console.timeEnd("largest_prime_factor");
