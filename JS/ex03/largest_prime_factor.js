function	largest_prime_factor(n)
{
	let result = n;
	let i = 2;

	while (result % 2 == 0)
		result /= 2;
	i = 3
	while (i * i <= result)
	{
		while (result%i == 0)
			result /= i;
		i += 2;
	}
	return result > 1 ? result : 2;
}
console.time("largest_prime_factor");
console.log(largest_prime_factor(600851475143));
console.timeEnd("largest_prime_factor");

