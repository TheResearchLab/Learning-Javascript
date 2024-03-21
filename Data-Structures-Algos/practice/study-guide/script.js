// LEET CODE PROBLEM 605 - FLOWERBED PROBLEM

const box = new Array(100).fill('1');
//console.log(box)

// Array Traversal
//const flowerbed = [0,0,1,0,0,0]
const arr2 = [1,1,1,1,1,1]
const arr3 = [0]


function flowerbed(flowerbed,n) {
  let freeSpace = 0;  

  if(flowerbed.length === 1 & flowerbed[0] === 0) return true
  
  for(let i=0;i<flowerbed.length;i++) {
    //console.log(i)
    //console.log(freeSpace)
    
    if(n === freeSpace) return true


    if(i===0) {
      if (flowerbed[i] + flowerbed[i+1] === 0) {
        flowerbed[i] = 1
        freeSpace +=1
        console.log(i)
        console.log('changed')
      };
      continue;
    }
  
    if(i===flowerbed.length-1) {
      if (flowerbed[i] + flowerbed[i-1] === 0) {
        flowerbed[i] = 1;
        freeSpace +=1;
        console.log(i)
        console.log('changed')
      }
      continue;
    }
    
    if(flowerbed[i-1] | flowerbed[i-1] ===0) { // if value to the left is exists or it's equal to zero
      if (flowerbed[i-1] + flowerbed[i] + flowerbed[i+1] === 0) {
        flowerbed[i] = 1;
        freeSpace +=1;
        console.log(i)
        console.log('changed')
      } 
      continue;
    }

    
  }

  if(n === freeSpace) return true
  console.log(flowerbed)
  return false

}

// console.log('----------------------------------------------------------------------------------');
// flowerbed(arr2);
// console.log('----------------------------------------------------------------------------------');
// flowerbed(arr3);


// BETTER SOLUTION TO LEET CODE PROBLEM 605 - CAN PLACE FLOWERBED

function flowerbed(flowerbed,n) {
  var count = 0 
  var pre = -1
  var post = 1 
  
  for(i=0;i<flowerbed.length;i++,pre++,post++) {
    if((getValue(flowerbed,i) + getValue(flowerbed,pre) + getValue(flowerbed,post))==0) {
      flowerbed[i] = 0
      count++
      if(count >= n) return true
    }
  }
  
  return (count == n)
}

const getValue = function(flowerbed,i) {
  if(i<0 || i>=flowerbed.length) {
    return 0
  }
  return flowerbed[i]
}

const arr4 = [1,0,1,0,1,0,1]
console.log(flowerbed(arr4,0));

// PROBLEM 345 - Reverse Vowels of a String

// function reverseVowels(s) 
//  pointer to 