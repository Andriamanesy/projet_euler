#!/bin/bash

multiples_of_3_or_5()
{
	i=0;
	sum=0;
	while [ $i -lt $1 ] ;do
		if [ $((i%3)) -eq 0 ] || [ $((i%5)) -eq 0 ] ;then
			sum=$((sum + i));
		fi
		i=$((i + 1));
	done
}

multiples_of_3_or_5 10
echo $sum
