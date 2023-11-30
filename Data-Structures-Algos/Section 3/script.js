// const nemo = ['nemo'];
// const everyone = ['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank']
// const large = new Array(10000).fill('marlin')
// large.push('nemo')

// // O(n) --> linear time
// function findNemo(array) {
//     for (let i=0;i<array.length; i++) {
//         if (array[i] === 'nemo') {
//             console.log('found nemo!');
//         } 
//     }
// }

// findNemo(nemo);
// findNemo(large);

// O(2) for two operations
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]); //O(1)
}

const boxes = new Array(100).fill('things');

logFirstTwoBoxes(boxes);