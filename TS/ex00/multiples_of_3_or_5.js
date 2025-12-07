function multiples_of_3_or_5(n) {
    var i = 0;
    var sum = 0;
    while (i < n) {
        if ((i % 3 == 0) || (i % 5 == 0))
            sum += i;
        i++;
    }
    return sum;
}
console.log(multiples_of_3_or_5(10));
