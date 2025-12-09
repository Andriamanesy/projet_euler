
function	int_len(n)
{
	let i = 0;
	if (n == 0)
		return 1;
	while (n >= 1)
	{
		n = n / 10;
		i++;
	}
	return i;
}

function	pow(n, p)
{
	let result = 1;
	let i = 0;
	if (p == 0)
		return 1;
	while (i < p)
	{
		result *= n;
		i++;
	}
	return result;
}

function	inverse_nbr(n)
{
	let inverse = 0;
	let tmp = n;
	let chiffre = 0;
	while (tmp > 0)
	{
		chiffre = tmp%10;
		inverse = (inverse * 10) + chiffre;
		tmp = (tmp / 10) | 0;
	}
	return inverse;
}

function	largestPalindromeProduct(n)
{
	let i = pow(10, n-1);
	let j = pow(10, n-1);
	let max = 0;
	let result = 0;
	while (int_len(i) <= n)
	{
		while (int_len(j) <= n)
		{
			result = i * j;
			if ((result == inverse_nbr(result)) && result > max)
				max = result;
			j++;
		}
		i++;
		j = i;
	}
	return max;
}

console.log(largestPalindromeProduct(3));
