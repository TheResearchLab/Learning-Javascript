'use strict';
/*
// Video 93 - Scoping Variables

// function calcAge(birthYear){
//     const age = 2037 - birthYear;
    
//     function printAge(){
//         let outputString = `Hi my name is ${firstName} and I am ${age} years old.`
//         console.log(outputString);
    
//         if (birthYear>=1981 && birthYear <= 1996) {
//             const firstName = 'Charlie';
//             const str = `Oh and you're a millienial, ${firstName}.`
//             console.log(str);
//             var millienial =true;

//             // function block scoped
//             function add(a,b){
//                 console.log(a+b);
//             }

//             outputString = 'NEW OUTPUT' // update variable value from child scope
//         }
        
//         console.log(millienial);
//         //add(2,3); not defined. unless use strict is turned off
//         console.log(outputString);
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Aaron';
// calcAge(1996);


// Video 95 - Hoisting and Temporal Dead Zone


// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Aaron';
// let job = 'Developer';
// const year = 1991;

// Functions
console.log(addDecl(5,4));
console.log(addArrow(5,4));
console.log(addExp(5,4));

function addDecl(a,b){
    return a +b;
}

// const addArrow = (a,b) => a+b;

// const addExp = function(a,b){
//     return a +b;
// }

// Calling with Var

console.log(addArrow(5,4));
console.log(addExp(5,4));
console.log(addExp); // returns undefined... can't call undefined

var addArrow = (a,b) => a+b;

var addExp = function(a,b){
    return a +b;
}



// Hoisting problem

console.log(!numProducts) // undefined is a falsy value and therefore causes issues when hoisted
if(!numProducts) deleteGroceryCart();

var numProducts = 10;

function deleteGroceryCart(){
    console.log('Cart Deleted');
}

var x = 1;
var y = 2;
const z = 3;

console.log(window.x === x); // var variables create properties on the window
console.log(window.y === y);
console.log(window.z === z);


// Video 97 

// Global 
console.log(this); // window


// Simple Function
const addNums = function(a,b){
    console.log(a + b);
    console.log(this); // undefined
};

addNums(4,5); 

// Arrow function 
const addArrow = (a,b) => {
    console.log(a + b);
    console.log(this); // scope outside function, so window
};


// Method Call
const aaron = {
    firstName:'Aaron',
    job:'Developer',
    birthYear: 1996,
    calcAge:function(){
        console.log(this)
        console.log(2023 - this.birthYear)
    }
}

aaron.calcAge() // this keyword points at the object that calls method


const matilda={
    birthYear:2017,
};

matilda.calcAge = aaron.calcAge // method borrowing
matilda.calcAge() // this keyword points at matilda


// Simple function call
const a = aaron.calcAge;
a(); // this keyword is now undefined because it is just a simple function call.





// Video 98 - Arrow function vs Regular Functions

var firstName = 'Noraa';

// Regular Functions
const aaron = {
    firstName:'Aaron',
    job:'Developer',
    birthYear: 1996,
    calcAge:function(){ // self is a pre ES6 solution to this scoping issue
        console.log(this);
        console.log(2023 - this.birthYear);
        const self = this; // preserves this for use of isMillenial
        const isMillenial = function(){
            if(self.birthYear >= 1981 && self.birthYear <= 1996) return true;
        }
        console.log(isMillenial());
    },
    greet: () => console.log(`hi my name is ${this.firstName}`) // surrounding function = global scope
}

aaron.greet(); // calls for window 
aaron.calcAge();



// Arrow Functions
const aaron = {
    firstName:'Aaron',
    job:'Developer',
    birthYear: 1996,
    calcAge:function(){ // self is a pre ES6 solution to this scoping issue
        console.log(this);
        console.log(2023 - this.birthYear);
        const isMillenial = () => {
            if(this.birthYear >= 1981 && this.birthYear <= 1996) return true;
        }
        console.log(isMillenial());
    },
    greet: () => console.log(`hi my name is ${this.firstName}`) // surrounding function = global scope
}

aaron.calcAge();


// Arguments Keyword - for regular functions not arrow functions
function addDecl(a,b){
    return a +b;
}

const addArrow = (a,b) => a+b;

const addExp = function(a,b){
    console.log(arguments);
    return a +b;
}

addExp(2,5);
addExp(2,5,8,12); // arguments keyword

var addArrpw = (a,b) => {
    console.log(arguments) //reference error
    return a + b
}
addArrow(2,5,8);


// Video 99 - Primitives vs Objects

let age = 30;
let oldAge = age;
age = 31;
console.log(age,oldAge);

const me = {
    firstName:'aaron',
    age: 30
}

const friend = me;

friend.age = 27;

console.log(friend); // both have 27 age
console.log(me); // both have 27 age

// Javascript Primitive Data Types - 
    // (Number)
    // (String)
    // (Boolean)
    // (BigInt)
    // (Undefined)
    // (Null)
    // (Symbol)

    These are primitive types
//
//*Objects (Object literals, Arrays, Functions, +)
//    These are reference types



// Video 100 - Primitives vs Objects in Practice


//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName,oldLastName);

// Reference Typesd
const jessica = {
    firstName:'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);

//marriedJessica = {} // Can't change const variable. Works with let, not constant

// Copying Objects
const jessica2 = {
    firstName:'Jessica',
    lastName:'Williams',
    age:27
};

const jessicaCopy = Object.assign({},jessica2);
jessicaCopy.lastName = 'Davis'

console.log(jessica2);
console.log(jessicaCopy);


// Shallow copy vs deep clone
const jessica = {
    firstName:'Jessica',
    lastName:'Williams',
    age:27,
    family:['carl','chuck'] // added array
};

const jessicaCopy = Object.assign({},jessica);
jessicaCopy.lastName = 'Davis'

console.log(jessica); // Array is in both
console.log(jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessica); // Array additions are added to both arrays (Shallow Copy)
console.log(jessicaCopy);
*/