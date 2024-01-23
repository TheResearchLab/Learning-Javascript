const letters = ['a','b','c','d','x','e','l','h'];
const basket = [2,35,65,1,57,9,7];

console.log(letters.sort()); // small inputs then this is a good option
console.log(basket.sort()); // sort method converts numbers to strings

console.log('65'.charCodeAt(0));
console.log('12'.charCodeAt(0));
console.log('4'.charCodeAt(0));

console.log(
    basket.sort(function(a,b) {
    return a - b // why does this cause the algo to sort the number
})
)

const numbers = [99,44,6,2,1,5,63,87,283,4,0]

// Bubble Sort Algo
function bubbleSort(arr) {
    const length = arr.length;
    for(let i=0;i<length;i++) {
        for(let j=0;j<length;j++) {
            if(arr[j+1]<arr[j]) {
                const temp = arr[j+1]
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

console.log(bubbleSort(numbers));

function selectionSort(arr) {
    const length = arr.length;
    for(let i=0;i<length;i++) {
        let minValue = i;
        let temp = arr[i];
        for(let j=i+1;j<length;j++) {
            if(arr[j]<minValue) {
                minValue = j;
            }
        }
        arr[i] = minValue;
        arr[minValue] = temp;
    }
    return arr
}

console.log(selectionSort(numbers));

function insertionSort(arr) {
    const sortedArr = [];
    const length = arr.length;
    for(let i=0;i<length;i++) {
        if(arr[i]>arr[i+1]) {
            sortedArr[]
            arr[i] = arr[i+1];
            arr[i+1] = temp
        }
    }                                                                            
}