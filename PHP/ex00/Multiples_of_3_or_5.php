<?php

	function multiple_of_3_or_5($n)
	{
		$i = 0;
		$sum = 0;

		while ($i < $n)
		{
			if(($i % 3 == 0) || ($i % 5 == 0))
				$sum += $i;
			$i++;
		}
		return $sum;
	}
	echo multiple_of_3_or_5(10);
?>
