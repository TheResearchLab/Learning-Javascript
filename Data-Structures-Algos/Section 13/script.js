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
    const length = arr.length;
    for (let i=0;i<length;i++) {
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i,1)[0]);
        } else {
            for (let j=1;j<i;j++) {
                if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
                    arr.splice(j,0,arr.splice(i,1)[0]);
                }
            }
        }
    }
    return arr                                                      
}

console.log(insertionSort([1,3,2]));

// function merge sort

function mergeSort(arr) {
    if(arr.length ===1) {
        return arr
    }

    const length = arr.length;
    const middle = Math.floor(length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return mergeSort(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left,right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex<left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}