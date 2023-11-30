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
const logPairs = function(boxes) {
    boxes.forEach(function(firstBox) {
        boxes.forEach(function(secondBox) {
            console.log(firstBox,secondBox);
        })
    })
}



logPairs(boxes)