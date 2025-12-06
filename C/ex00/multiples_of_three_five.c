int	multiple_of_three_five(int nbr)
{
	int i;
	int sum;

	i = 0;
	sum = 0;
	while (i < nbr)
	{
		if ((i % 3 == 0) || (i % 5 == 0))
			sum += i;
		i++;
	}
	return sum;	
}

#include <stdio.h>
int	main(int ac, char **av)
{
	printf("%d", multiple_of_three_five(49));
}
