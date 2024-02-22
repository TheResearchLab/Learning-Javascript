 let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhh');
    }
 }

//  user.age;
//  user.spell = 'abra kadabra';
// console.log(user);
// user.scream(); 

// Video 81 Hash tables in different languages

const a = new Map(); // keeps order of insertion
const b = new Set(); // only stores keys (no values)

// Video 82 - 86 Hash table implementation 

// class HashTable {
//     constructor(size){
//       this.data = new Array(size);
//     }
  
//     _hash(key) {
//       let hash = 0;
//       for (let i =0; i < key.length; i++){
//           hash = (hash + key.charCodeAt(i) * i) % this.data.length
//       }
//       return hash;
//     }

//     set(key, value) {
//         let address = this._hash(key) 
//         if (!this.data[address]) {
//             this.data[address] = [];
//         }
//         this.data[address].push([key,value]);
//         return this.data
//     }

//     get(key) {
//         let address = this._hash(key) 
//         const currentBucket = this.data[address];
//         if (currentBucket) {
//           for(let i=0;i<currentBucket.length;i++) {
//             if (key === currentBucket[i][0]) {
//               return currentBucket[i][1];
//             } 
//           }
//         }
//         return undefined
//     } //O(1)
    
//     keys() {
//       const keyArray = new Array(0);
//       // loop through items in array
//       this.data.forEach(function(bucket) {
//         if(bucket.length > 1) {
//           bucket.forEach(function(entry) {
//             keyArray.push(entry[0][0]);
//           }) 
//         } else {
//             keyArray.push(bucket[0][0]);
//           }
//       })
//       return keyArray;
//     }
//   }
  
// const myHashTable = new HashTable(50);
// myHashTable.set('grapes',2);
// //console.log(myHashTable.get('grapes'));

// myHashTable.set('candy','hersheys');
// console.log(myHashTable.get('candy'));

// myHashTable.set('apples');

// console.log(myHashTable.keys());


// Video 87 - Challenge (First recurring character)

// assumption - blank arrays will also return undefined
// assumption - only floating point and integers are acceptable array values
// assumption - array is passed

const getFirstRepeat = function(numArr) {
  // if type <> array or length is 0 then undefined
  if(typeof(numArr) !== 'object') {
    return undefined
  }

  if(numArr.length < 1) {
    return undefined
  }

  // find the first reoccuring value
  const numObject = {};
  for (let i=0;i < numArr.length;i++) {
    if(typeof(numArr[i]) !== 'number') return undefined
    
    if(!numObject[numArr[i]]) {
      numObject[numArr[i]] = 1;
    } else {
      return numArr[i]
    }
  }
  return undefined
}


console.log(getFirstRepeat(undefined));
console.log(getFirstRepeat([undefined]));
console.log(getFirstRepeat([1,2,3,4,5]));
console.log(getFirstRepeat([1,1,2,3,4,5]));
console.log(getFirstRepeat([1,4,3,2,3,6,7]))
console.log(getFirstRepeat([1,2,3,4,5,1]));


