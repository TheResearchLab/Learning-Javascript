const box = new Array(100).fill('1');
console.log(box)

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

console.log(flowerbed(arr3,2));
// console.log('----------------------------------------------------------------------------------');
// flowerbed(arr2);
// console.log('----------------------------------------------------------------------------------');
// flowerbed(arr3);


