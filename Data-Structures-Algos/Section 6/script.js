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
console.log([] === []); // always returns false because js is checking references

var obj1 = {value:10}
var obj2 = obj1;
var obj3 = {value:10};

console.log(obj2 === obj1);

// context

// instaniation