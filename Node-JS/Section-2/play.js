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
// const hobbies = ['Sports','Cooking','Singing'];
// const copiedArray = hobbies.slice(); // copies an array
// console.log(copiedArray);

// const toArray = function(...args){
//     return args;
// }

// console.log(toArray(2,3,4,5,6,7));

// ============= Video 19 Destructuring ============//

// const person = {
//         myName:'Aaron',
//         myAge:'29',
//         greet: function() {
//             console.log(`Hi my name is ${this.name}`)
//         }
//     }

// const printName = ({ name }) => { // destructured code
//     console.log(name);
// }

// printName(person) 

// const {myName,myAge} = person;
// console.log(myName,myAge);

// const hobbies = ['Skating','Sky-diving']
// const [hobby1,hobby2] = hobbies
// console.log(hobby1,hobby2)

// ============= Video 20 Async Code ============//
const fetchData = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => { 
            resolve('Fourth!'); // fourth
        }, 1500);
    });
    return promise; // synchronous code that gets executed before other stuff
};

const printDone = (str) => console.log(str);

setTimeout(() => {
    console.log('third') //third
    fetchData().then(text => {
        console.log(text)
        return text
    }).then(text1 => {
        console.log(text1)
    });
},1) // async code does not execute immediately

console.log('first');
console.log('second');


