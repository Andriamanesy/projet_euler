def multiples_of_3_or_5(n):
    i = 0
    sum = 0
    while (i < n):
        if ((i%3 == 0) or (i%5 == 0)):
            sum += i
        i += 1;
    return sum

print(multiples_of_3_or_5(10))
