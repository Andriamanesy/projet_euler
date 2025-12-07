#include <iostream>

int	multi_3_or_5(int n)
{
	int i;
	int sum;

	i = 0;
	sum = 0;
	while (i < n)
	{
		if ((i%3 == 0) || (i%5 == 0))
		       sum += i;
		i++;	
	}
	return sum;
}

int	main()
{
	int result = multi_3_or_5(10);
	std::cout <<"La somme est " <<result << std::endl;
	return 0;
}
