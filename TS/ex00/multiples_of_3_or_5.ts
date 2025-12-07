function	multiples_of_3_or_5(n: number): number
{
	let	i : number = 0;
	let	sum : number = 0;

	while (i < n)
	{
		if ((i%3 == 0) || (i%5 == 0))
			sum += i;
		i++;
	}
	return sum;
}

console.log(multiples_of_3_or_5(10));
