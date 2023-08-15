// ============= Video 12 ============//
// var userName = 'Max';
// var age = 29;

// function summarizeUser(userName,age,hobby) {
//     return `Name is ${userName}, age is ${age}, hobyy is ${hobby}.`;   
// }

//console.log(summarizeUser(name,age,'running'))

// ============= Video 13 ============//
// let userName = 'Max';
// let age = 29;

// function summarizeUser(userName,age,hobby) {
//     return `Name is ${userName}, age is ${age}, hobyy is ${hobby}.`;   
// }

//console.log(summarizeUser(name,age,'running'))

// ============= Video 14 Arrow functions ============//
// let userName = 'Max';
// let age = 29;
// const summarizeUser = (userName,age,hobby) => `Name is ${userName}, age is ${age}, hobyy is ${hobby}.`;
// console.log(summarizeUser(userName,age,'running'))

// ============= Video 15 Objects ============//
// const person = {
//     name:'Aaron',
//     age:'29',
//     greet: function() {
//         console.log(`Hi my name is ${this.name}`)
//     }

// }

// person.greet()

// ============= Video 16 Array & Array Methods ============//
// const hobbies = ['Sports','Cooking','Singing'];

// for of loop
// for (let hobby of hobbies) {
//     console.log(hobby)
// }

// map returns an array and I destructured it
// console.log(...hobbies.map(hobby=>`Hobby is ${hobby}`))

// ============= Video 17 Arrays, Object and Reference Types ============//
// hobbies.push('Programming') // reference type like arrays and objects
// console.log(...hobbies)

// ============= Video 18 Spread and Rest Operators ============//
const hobbies = ['Sports','Cooking','Singing'];
const copiedArray = hobbies.slice(); // copies an array
console.log(copiedArray);

const toArray = function(...args){
    return args;
}

console.log(toArray(2,3,4,5,6,7));