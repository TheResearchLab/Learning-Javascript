const basket = ['apples','grapes','pears']

// Pointer
let obj1 = {a:true};
let obj2 = obj1;
obj1.a = 'hello'
delete obj1 // won't delete on object 2 because it's still using the value at the location
//console.log(obj1===obj2);
//console.log(obj1);
obj2 = 'hello';
console.log(obj2);