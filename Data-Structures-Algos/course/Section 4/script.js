// Video 56 - Exercise Interview Question

// Given 2 arrays, create a function that let's a user know (true/false) whether
// these two arrays contain any common items
// For Example
// const arr1 = ['a','b','c','x'];
// const arr2 = ['z','y','i'];
// should return false
// ------------------
// const arr1 = ['a','b','c','x']
// const arr2 = ['z','y','x']
// should return true

// 2 params - arrays - no size limit
// return true or false


// Brute force solution  O(a*b)
function containsCommonItem(arr1,arr2) {
    arr1.forEach(function(firstArr) {
        arr2.forEach(function(secondArr) {
            if(firstArr == secondArr) {
                return true;
            }   
        })
    })
    return false;
}

const arr1 = ['a','b','c','x'];
const arr2 = ['z','y','i'];

// console.log(containsCommonItem(arr1,arr2));

// arr1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
//}

// arr2[index] === obj.properties

// Better solution O(a+b)
function containsCommonItem2(arr1,arr2) {
    // loop through first array  and create object where properties === items in the array
    let map = {};
    for (let i=0;i<arr1.length;i++) {
        if(!map[arr1[i]]) { // check if property exists
            const item = arr1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object
    for (let j=0;j<arr2.length;j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false
}

console.log(containsCommonItem2(arr1,arr2));

function containsCommonItem3(arr1,arr2) {
    return arr1.some(item=>arr2.includes(item));
}

console.log(containsCommonItem3(arr1,arr2)); 
