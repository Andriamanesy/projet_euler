function gcd(a, b) {
    while (b !== 0n) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function modMul(a, b, mod) {
    return (a * b) % mod;
}

function modPow(base, exp, mod) {
    let result = 1n;
    base = base % mod;

    while (exp > 0n) {
        if (exp & 1n) result = (result * base) % mod;
        base = (base * base) % mod;
        exp >>= 1n;
    }
    return result;
}

function isPrime(n) {
    if (n < 2n) return false;
    if (n === 2n || n === 3n) return true;
    if (n % 2n === 0n) return false;

    let d = n - 1n;
    let s = 0n;
    while (d % 2n === 0n) {
        d >>= 1n;
        s++;
    }

    const bases = [2n, 325n, 9375n, 28178n, 450775n, 9780504n, 1795265022n];
    for (let a of bases) {
        if (a >= n) continue;
        let x = modPow(a, d, n);
        if (x === 1n || x === n - 1n) continue;

        let composite = true;
        for (let r = 0n; r < s - 1n; r++) {
            x = modMul(x, x, n);
            if (x === n - 1n) {
                composite = false;
                break;
            }
        }
        if (composite) return false;
    }
    return true;
}

function pollardRho(n) {
    if (n % 2n === 0n) return 2n;

    let x = 2n, y = 2n, c = 1n, d = 1n;

    while (d === 1n) {
        x = (modMul(x, x, n) + c) % n;
        y = (modMul(y, y, n) + c) % n;
        y = (modMul(y, y, n) + c) % n;

        let diff = x > y ? x - y : y - x;
        d = gcd(diff, n);

        if (d === n) return pollardRho(n + 1n);
    }
    return d;
}

function largest_prime_factor(n) {
    n = BigInt(n);

    if (isPrime(n)) return n;

    const factor = pollardRho(n);
    const other = n / factor;

    const a = largest_prime_factor(factor);
    const b = largest_prime_factor(other);

    return a > b ? a : b;
}

console.time("largest_prime_factor");
console.log(largest_prime_factor(600851475143));
console.timeEnd("largest_prime_factor");
