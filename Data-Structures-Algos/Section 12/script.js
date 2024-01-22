let counter = 0;
function inception() {
    console.log(counter);
    if(counter>3){
        return 'done!'
    }
    counter++;
    return inception();
}


// console.log(inception());


function findFactorialRecursive(number) {
    if(number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number-1)
}

function findFactorialIterative(number) {
    let answer = 1;
    for(let i=2;i<=number;i++) {
        answer = answer * i
    }
    
    return answer;
}

// console.log(findFactorialIterative(5)); // 120
// console.log(findFactorialRecursive(5)); // 


function fibonacciIterative(n) {
    let arr = [0,1];
    for(let i=2;i<n+1;i++) {
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n]
}

function fibonacciRecursion(n) {
    if(n<2) {
        return n
    }
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2); 
}

// console.log(fibonacciRecursion(8));
console.log(fibonacciIterative(8));
