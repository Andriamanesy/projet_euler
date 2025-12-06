function	multiple_of_3_5(number)
{
	let	i = 0;
	let	sum = 0;

	while (i < number)
	{
		if (!(i % 3) || !(i % 5))
			sum += i;
		i++;
	}
	return sum;
}

console.log(multiple_of_3_5(1000));
