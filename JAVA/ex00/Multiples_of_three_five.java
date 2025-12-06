public	class Multiples_of_three_five
{
	public static void main(String []args)
	{
		System.out.println(multiples_of_3_5(1000));
	}

	public	 static int	multiples_of_3_5(int nbr)
	{
		int	i;
		int	sum;

		sum = 0;
		i = 0;
		while (i < nbr)
		{
			if ((i%3 == 0) || (i%5 == 0))
				sum += i;
			i++;
		}
		return sum;
	}
}
