function sumPrimes(num) {
  function primeFactorsTo(max)
  {
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
  }
  var primes = primeFactorsTo(num);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var res = primes.reduce(reducer)
  return res;
}

sumPrimes(10);
