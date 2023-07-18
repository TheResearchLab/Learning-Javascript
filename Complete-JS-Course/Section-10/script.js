'use strict';

/*
// Video 128 - Default Paramters
const bookings = []

const createBooking = function(flightNum=1,numPassengers=15,price=100 * numPassengers){
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('MH567',undefined,27);


// Video 129 - How Passing Arguments Works
const flight = 'LH1234'
const aaron = {
    name: 'Aaron Tellis',
    passport: 3824756384756
}

const checkIn = function (flightNum,passObj){
    flightNum = 'LM4567'; // change only impacts inside function
    passObj.name = 'Mr. ' + passObj.name; //this is the same as manipulating aaron object

    if (passObj.passport === 3824756384756 ){
        alert('Checked In');
    } else {
        alert(' Call Security');
    }

}

// Same as doing...
//const flightNum = flight (DIFFERENT OBJECTS)
//const passenger = aaron (SAME OBJECT IN MEMORY HEAP)

// checkIn(flight,aaron);
// console.log(aaron); // function did change name
// console.log(flight); // function did not change



// Real Life Example - function manipulating function
const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000)
    console.log(person)
}

newPassport(aaron);
checkIn(flight,aaron);


// Video 130 - Functions Accepting Callback Functions

function oneWord(str) {
   return str.replaceAll(' ','').toLowerCase()
}

const upperFirstWord = function(str){
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformers = function(str,fn){
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`original string: ${str}`);
    console.log(`function name: ${fn.name}`); // function has properties
}



// Callback is used a lot in javascript
console.log('-'.repeat(5) + 'UPPER FIRST WORD FUNCTION' + '------');
transformers('Javascript is the best',upperFirstWord)
console.log('-'.repeat(5) + 'ONEWORD FUNCTION' + '------');
transformers('Javascript is the best',oneWord);

const high5 = function(){
    console.log('👋')
}

document.body.addEventListener('click',high5);

// For each method
['Aaron','Martha','Adam'].forEach(high5);


// Video 132 - Functions returning functions


// Greet Function

const greet = function(greeting) {
    return function(name='(Enter name)'){
        console.log(`${greeting} ${name}`);
    }    
}

const greeterHey = greet('Hey');
greeterHey('Aaron'); // Wow

greet('Hi')('Peter'); // since greet returns a function this is valid

// Only Arrow Functions
const greetArrow = (greeting) => (firstName) => console.log(`${greeting} ${firstName}`)

greetArrow('Hi')('Cherry');


// Video 133 - The Call and Apply Methods

const luftAirline = {
    airline:'liftAirline',
    iataCode: 'LA',
    bookings: [],
    book(flightNum,passName){
        console.log(`${passName} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push([passName,flightNum]);
    }
  

}
luftAirline.book('A132','Aaron');
luftAirline.book('D315','Mike');


const book = luftAirline.book


const euroWings =  {
    name: 'Euro Wing',
    iataCode: 'EW',
    bookings: []
    
}

//book('C453','Anthony'); // Regular Function Call, so "this keyword is undefined"

// CALL METHOD
book.call(euroWings,'B72','Aaron Tellis'); // sets this keyword to eurowings and add params
console.log(euroWings);

book.call(luftAirline,'E239','Mary Jane');
console.log(luftAirline);

const swiss = {
    airline:'Swift Airlines',
    iataCode:'SA',
    bookings: []
}

book.call(swiss,'E690','Mary Jane');
console.log(swiss);

// Mapping reminder
const bookMap = new Map(luftAirline.bookings)
console.log(bookMap);


// APPLY METHOD
const flightData = [583,'Harry Styles'];
book.apply(swiss,flightData); // not that used anymore

// Spread Operator
book.call(luftAirline,...flightData);


// Video 134 - The Bind Method - Manually set this keyword but returns a function instead of calling

const euroWings =  {
    name: 'Euro Wing',
    iataCode: 'EW',
    bookings: []
}

const luftAirline = {
    airline:'liftAirline',
    iataCode: 'LA',
    bookings: []
}

const swiss = {
    airline:'Swift Airlines',
    iataCode:'SA',
    bookings: []
}


function book(flightNum,passName){
    console.log(`${passName} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    this.bookings.push([passName,flightNum]);
}

//book.call(euroWings,'B72','Aaron Tellis');

const bookEw = book.bind(euroWings); // bind returns a function
const bookLA = book.bind(luftAirline);
const bookSA = book.bind(swiss);

bookEw('B72','Jaron Butler');
bookLA('E369','Aaron Tellis');
bookSA('D517','Shannon Taylor');

const bookEwB72 =  book.bind(euroWings,'WD40') // Partial application
bookEwB72('Carl Winslow');
bookEwB72('Maryum Winslow');

console.log(euroWings);


// Dynamic "this" reminder example
luftAirline.planes = 0;
console.log(luftAirline);


const buyPlane = function(){
    this.planes++;
    console.log(this);
}

document.querySelector('.buy').addEventListener('click',buyPlane.bind(luftAirline)); // Can't use call because it would call the function

// More Partial Application
const addTax = (rate,value) => value + (value*rate);
console.log(addTax(0.06,350));

const addVat = addTax.bind(null,0.2)
//const addVat = (value) => value + (value*.2)
console.log(addVat(50));

// Challenge Function return Function
function calcBill(tax){
    return function(bill){
        return bill + (bill * tax)
    }
}

const vetTotal = calcBill(.10)
console.log(vetTotal(200));


// Video 135 - Coding Challenge #1

function displayResults(type='array',arr){ // default 
    if(typeof type === 'string'){
        console.log(`Poll results are ${arr.join(',')}`);
    } else {
        console.log(type);
    }

}

function registerNewAnswer(){
    const response = prompt(`${this.question} \n ${this.options.join('\n')} \n (Write option number)`);
    isNaN(Number(response)) || Number(response) < 0 || Number(response) > this.answers.length ? alert('insert a valid response') : this.answers[response] += 1;
    displayResults(this.answers)
    displayResults('string',this.answers)
}



const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: Javascript','1: Python','2: Rust','3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer,
    displayResults
};

document.querySelector('.poll').addEventListener('click',registerNewAnswer.bind(poll));

// Bonus
displayResults([5,2,3])
displayResults('string',[1,5,3,9,6,1])
poll.displayResults('string',[3,4,5,6])


// Video 136 - Immediate Invoked Function Expression (IIFE)


const runOnce = function(){
    console.log('this will never run again');
}
runOnce();

// Immediately Invoked Function Expression
(function(){ // wrapped with parenthesis
    console.log('this will never run again'); 
    const isPrivate = 23; // encapusalted inside function scope
})();

console.log(isPrivate)

// Arrow function
(() => console.log('this will never run again'))();



// Video 137 - Closures


const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        return passengerCount++;
        //console.log(`${passengerCount} passengers`);
    }
}


const booker = secureBooking();

let value = booker(); // strange behavior
value = booker(); // weird
value = booker(); // why is it incrementing? Closures...
console.log(value); // access value from closure and save it

console.dir(booker)


// Video - 138 More closures

let f;

const g = function(){
    const a = 23;
    f = function (){
        console.log(a*2);
    }
}


const h = function(){
    const b = 777
    f = () => {
        console.log(b*2);
    }
}

g();
f();
console.dir(f);
h();
f(); // h function reassigns f function

console.dir(f);


// Example 2 - The timer example of closure being created
const boardPassengers = function(n, wait) {
    const perGroup = n/3;
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups each with ${perGroup} people`);
    },wait * 1000) // 1000 milliseconds = 1 second. Wait is in seconds 


    console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000; // proof closure has priority over scope chain


boardPassengers(180,3); // the function in setTimeout
boardPassengers(1100,2);
boardPassengers(1800,4);
*/

// Video 139 - Coding Chellenge #2

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    console.dir(header.style.color)
    document.querySelector('body').addEventListener('click',function(){
        header.style.color = 'blue';
        console.dir(header.style.color)
    })

})();

// This IIFE (Immediately Invoked Function Expression) will Immediately execute, and the variables
// within will be created and the color will be set. An event listener will be added to the body.
// The event listener then will change the h1 element color to blue. The event listener is able to be executed
// and call the header variable after the main IFFE has executed and removed from the call stack because a closure
// has been created allowing the event listener to still access that variable. functions are able to recall the 
// variables from the context in which they were birthed/assigned.



