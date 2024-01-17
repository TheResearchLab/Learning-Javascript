let counter = 0;
function inception() {
    console.log(counter);
    if(counter>3){
        return 'done!'
    }
    counter++;
    return inception();
}


console.log(inception());


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

console.log(findFactorialIterative(5)); // 120
console.log(findFactorialRecursive(5)); // 


function fibonacciRecursion(n) {
    
}