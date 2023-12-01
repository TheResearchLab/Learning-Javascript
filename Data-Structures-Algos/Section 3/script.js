// const nemo = ['nemo'];
// const everyone = ['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank']
// const large = new Array(10000).fill('marlin')
// large.push('nemo')

// // O(n) --> linear time
// function findNemo(array) {
//     for (let i=0;i<array.length; i++) {
//         console.log('running')
//         if (array[i] === 'nemo') {
//             console.log('found nemo!');
//             break;
//         } 
//     }
// }

// findNemo(nemo);
// findNemo(large);

// // O(2) for two operations
// function logFirstTwoBoxes(boxes) {
//     console.log(boxes[0]); //O(1)
//     console.log(boxes[1]); //O(1)
// }

// const boxes = new Array(100).fill('things');

// logFirstTwoBoxes(boxes);


// Big O Rule #3 - watch for different terms for inputs
// function compressBoxes(boxes,boxes2) {
//     boxes.forEach(function(boxes) {
//         console.log(boxes);
//     })

//     boxes2.forEach(function(boxes) {
//         console.log(boxes);
//     })
// }
// // Big O of O(a+b)


// boxArr1 = new Array(100).fill('stuff');
// boxArr2 = new Array(1000).fill('things');

// compressBoxes(boxArr1,boxArr2);


// Loop Nested inside of a loop O(n^2)
const boxes = [1,2,3,4,5];

// const logPairs = function(boxes) {
//     for (let i=0; i< boxes.length; i++ ) {
//         for (let j=0; j<boxes.length; j++) {
//             console.log(`${boxes[i]}, ${boxes[j]}`)
//         }
//     }
// }
// const logPairs = function(boxes) {
//     boxes.forEach(function(firstBox) {
//         boxes.forEach(function(secondBox) {
//             console.log(firstBox,secondBox);
//         })
//     })
// }



// logPairs(boxes)



// Big O Rule #4 remove non dominants

// function printAllNumbersThenAllPairsSums(numbers) {
//     console.log('these are all the numbers');
//     numbers.forEach(function(number) {
//         console.log(number);
//     })

//     console.log('and these are their sums');
//     numbers.forEach(function(firstNum){
//         numbers.forEach(function(secondNum) {
//             console.log(firstNum + secondNum);
//         })
//     })
// }

// const numArr = new Array(10).fill(Math.floor(Math.random() * 100));
// printAllNumbersThenAllPairsSums(numArr);


// Video 48 - Exercises space complexity

function boooo(n) {
    for (let i=0;i<n.length; i++) {
        console.log('boooo!')
    }
}

boooo([1,2,3,4,5]) // O(1)

function arrayOfHiNTimes(n) {
    let hiArray= [];
    for (let i=0;i<n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

console.log(arrayOfHiNTimes(5)); // O(n)