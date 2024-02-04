function addTo80(n) {
  return n  + 80;
}

addTo80(5);

function memoizedAddTo80() {
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time')
      cache[n] = n + 80;
      return cache[n]
    }
  }
}

const memoized = memoizedAddTo80();

console.log('1',memoized(5));
console.log('2',memoized(5));

function fibonacci(n) {
  if(n<2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    if(n in cache) {
      return cache[n]
    } else {
      if(n<2) {
        return n
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n]
      }

    }
  }
}

const fasterFib = fibonacciMaster();
console.log('DP',fasterFib(10));