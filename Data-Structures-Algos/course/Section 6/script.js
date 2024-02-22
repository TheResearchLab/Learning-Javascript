 // Section 6 - Video 66
 
//  const strings = ['a','b','c','d'];
// // 4*4 = 16 bytes of storage

// console.log(strings[2]);

// // push
// strings.push('e'); // O(1)
// console.log(strings);

// // pop
// strings.pop(); // O(1)
// strings.pop();

// console.log(strings);

// // unshift - add new vars to array
// strings.unshift('x'); // O(n)
// console.log(strings);

// strings.splice(2,0,'alien');
// console.log(strings); // O(n)


// Section 6 - Video 67 Static vs Dynamic Arrays
// const strings = ['a','b','c','d'];

// Section 6 - Video 68 

// reference type
// console.log([] === []); // always returns false because js is checking references

// var obj1 = {value:10}
// var obj2 = obj1;
// var obj3 = {value:10};

// console.log(obj2 === obj1); // equal
// console.log(obj1 === obj3); // not equal

// // context vs scope
// console.log(this); //the object environment we are in right now?
// this.alert('Hi');

// // instaniation
// class Player {
//     constructor(name,type) {
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`Hi I am ${this.name}, and I ${this.type}.`);
//     }
// }

// class Wizard extends Player {
//     constructor(name, type) {
//         super(name,type);  // super gives access to 'this'
//     }
//     play() {
//         console.log(`WEEEEEEE I am ${this.type}`);
//     }
// }

// const wizard1 = new Wizard('Shelly','Healer');
// const wizard2 = new Wizard('Sean','Black Magician')

// const tommyFootball = new Player('Tommy','Footballer');
// tommyFootball.introduce()

// const ryanRacer = new Player('Ryan','Everything');
// ryanRacer.introduce();

// wizard1.introduce();
// wizard2.introduce();
// wizard2.play();

// Video 70 - Implementing An Array

// class MyArray {
//     constructor() {
//         this.length = 0;
//         this.data = {};
//     }
//     get(index) {
//         return this.data[index];
//     }
//     push(value) {
//         this.data[this.length] = value;  
//         this.length++  
//         return this.length; 
//     }
//     pop() {
//         const lastValue = this.data[this.length-1];
//         delete this.data[this.length-1];
//         this.length--;
//         return lastValue;
//     }
//     delete(index) {
//         const value = this.data[index];
//         this.shiftItems(index);
//     }

//     shiftItems(index) {
//         for (let i=index; i<this.length-1;i++) {
//             this.data[i] = this.data[i+1]; 
//             delete this.data[this.length-1];
//             this.length--;
//         }
//     }
// }


// const arr1 =  new MyArray();
// console.log(arr1.get(0));
// arr1.push(5);
// console.log(arr1);
// arr1.push('you');
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// arr1.shiftItems(1);

// Video 72 - Exercise reverse a string
// function reverse(str) {
//    let reversedString = '';
//     for (let i=str.length-1; i>=0;i--) {
//         reversedString += str[i]
//    }
//    return reversedString
// }


// // Video 73 - Reverse A String
// function reverse(str) {
//    let reversedString = '';
   
//    //check input
//    if(!str || str.length < 2 || typeof str !== 'string') {
//       return 'bad input'
//    }
//    // reverse the string 
//    for (let i=str.length-1; i>=0;i--) {
//       reversedString += str[i]
//    }
//    return reversedString
// }


// console.log(reverse('racecar racecar racecar'));

// function reverse2(str) {
//    return str.split('').reverse().join('');
// }

// console.log(reverse2('racecar racecar racecar'));

// const reverse3 = str => str.split('').reverse().join('');

// Video 74 - Merge Sorted Arrays

// assuming data inputs are always arrays and always sorted
// assuming arrays always contain integers
// assuming func will only receive two arrays 
// assuming values should be sorted in ascending order

// function mergeSortedArrays(a,b) {
//    // sort the arrays
//    sortedArr = [...a,...b].sort();
//    return sortedArr
// }

// console.log(mergeSortedArrays([1,4,5],[2,4,6]));

// Video 75 - Solution to merged arrays 

function mergeSortedArrays2(a,b) {
   const mergedArr = [];
   let arr1Item = a[0];
   let arr2Item = b[0];

   i= 1;
   j= 1;
   while (arr1Item || arr2Item) {
      if(!arr2Item || arr1Item < arr2Item) {
         mergedArr.push(arr1Item);
         arr1Item = a[i];
         i++;
      } else {
         mergedArr.push(arr2Item);
         arr2Item = b[j];
         j++;
      }
   }
   return mergedArr;
}

console.log(mergeSortedArrays2([1,2,5],[3,6,7]))