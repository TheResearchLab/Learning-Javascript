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
//console.log(flowerbed(arr4,0));

// PROBLEM 345 - Reverse Vowels of a String

// function reverseVowels(s) 
//  pointer to start at far right
//  pointer to start at far left

//  expected variables list  

//  if length of the array is one then just return the array

//  loop through the array with the two pointers until both pointers are at the same position
//    if the character is a vowel then stop until another vowel is found
//    if two vowels are found, switch them -- will account for overlap case as well


var vowelCheck = function(char,vowels) {
  if(vowels.includes(char)) {
    return true
  }
  return false
}


function reverseVowels(s) {
  if(s.length==1) {
    return s
  }

  var wordArr = s.split("")
  
  var left = 0;
  var right = s.length-1;
  var vowels = new Array('a','e','i','o','u','A','E','I','O','U');
  
  while(left <= right) {
    
    if (vowelCheck(wordArr[left],vowels) & vowelCheck(wordArr[right],vowels)) {
      let tempVar = wordArr[left]
      wordArr[left]  = wordArr[right]
      wordArr[right] = tempVar
      left++;
      right--;
    }

    if (!vowelCheck(s[left],vowels)) left++;
    if (!vowelCheck(s[right],vowels)) right--;

    
  }

  return wordArr.join("")
  
}


//console.log(reverseVowels('AeaA'))

// PROBLEM 151 - Reverse Words in a String

s = 'this is a string      of words'

var reverseWords = function(s) {
  s = s.split(' ').filter(function(string) { return string !== ''}).reverse().join(' ')
  return s
} 

console.log(reverseWords('h1 my    name is     paul'))


// PROBLEM 238 - Product of Array Except Self

i = 2
arr = [1,2,3,4]
output = []

console.log(arr.slice(i,4))
console.log(arr.slice(0,i-1))