/*
// Video 32 - Activating  Strict Mode

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // strict mode helps output the error in console
if (hasDriversLicense) console.log('I can drive!');


// const interface = 'Audio'; // reserved word, strict mode error



// Video 33 - Functions

function logger() 
{
    console.log('My name is Aaron');
}

logger(); // invoking, running, calling the function
logger();
logger();

// Function with parameters
function fruitProcessor(apples,oranges)
{
    //console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(1,5);
console.log(appleOrangeJuice);

// Video 34 - Functional Declaration and Expressions

const age1 = calcAge1(1996); // black magic

// function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
    
}


// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

age2 = calcAge2(1996);

console.log(age1,age2);




// Video 35 - Arrow Function 

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(1996));

// arrow function - multiple lines
const yearsUntilRetirement = (birthYear, firstName) => {
    const age =  2023 - birthYear;
    const retirement = 65 - age;
    // return retirement 
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1996,'Aaron'));



// Video 36 - Functions calling other functions


function cutFruitPieces (fruit){
    return fruit * 4
}

function fruitProcessor(apples,oranges)
{
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(10,10));



// Video 37 - Reviewing Functions

const calcAge =  function (birthYear) {
    return 2023 - birthYear;
}



const yearsUntilRetirement = function (birthYear, firstName) {
    
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    const isRetiring = retirement>=0 ? retirement:
    -1;

    return isRetiring;
}

const aaron = yearsUntilRetirement(1996,'Aaron');
console.log(aaron);



// Video 38 - Coding Challenge #1 Functions

const calcAvg = (score1,score2,score3) => {
    return (score1 + score2 +score3)/3;
}

function checkWinner(koalasAvg,dolphinsAvg){
    if (koalasAvg > (dolphinsAvg*2)){
        return `koalas are the winner! Koalas: ${koalasAvg} Dolphins: ${dolphinsAvg}`;
    }
    else if (dolphinsAvg > (koalasAvg*2)){
        return `dolphins are the winner! Koalas: ${koalasAvg} Dolphins: ${dolphinsAvg}`;
    }
    else{
        return `Nobody wins! Koalas: ${koalasAvg} Dolphins: ${dolphinsAvg}`;
    }
}

let koalasAvg = calcAvg(65,54,49);
let dolphinsAvg = calcAvg(44,23,71);

console.log(checkWinner(koalasAvg,dolphinsAvg));

koalasAvg = calcAvg(23,34,27);
dolphinsAvg = calcAvg(85,54,41);

console.log(checkWinner(koalasAvg,dolphinsAvg));



// Video 39 - Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';


// Create an array
const friends = ['Michael','Steven','Peter'];
console.log(friends);

let years = new Array(1991,1984,2008,2020);

// array length and position
console.log(friends[0]);
console.log(friends.length); // .length property 
console.log(friends[friends.length -1]); // find the last element


// Mutate an array 
friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob','Alice'] // This is illegal

const firstName = 'Aaron';
const aaron = new Array(firstName,'Tellis',2023-1996,'Developer',friends);

console.log(aaron);


// Exercise Arrays

const calcAge = birthYear => 2023 - birthYear;

years = [1990,1967,2002,2010,2018];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[years.length - 1]));

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])]
console.log(ages);



// Video 40 - Array Operations (Array Methods)


// Add elements
const friends = ['Michael','Steven','Peter'];
friends.push('Jay'); // add to the back of array
friends.unshift('John') // add to the front of the array
// const newLength = friends.push('New Name'); // push element and record array size

// Remove elements
friends.pop(); // take the last element;
friends.pop();
friends.shift(); // takes first element
console.log(friends);
// const poppedElem = friends.pop() //shows what element was removed


// Includes ES6 function
console.log(friends.includes('Bob')); // uses strict equality

if (friends.includes('Steven')){
    console.log('You have a friend steven');
}




// Video 41 - Coding Challenege 2 Arrays

let bill = [125,555,44];


function calcTip(bill){
    const tip = bill >= 50 && bill <= 300 ? bill*.15:
    bill*.2;
    return tip;
}


console.log(calcTip(bill[0]));

const total = [bill[0] + calcTip(bill[0]),bill[1] + calcTip(bill[1]),bill[2] + calcTip(bill[2])];
console.log(total);




// Video 42 - Objects Intro

const aaron = {
    firstName: 'aaron',
    lastName: 'tellis',
    age: 2023 - 1996,
    job: 'Developer',
    friends: ['Greg','Tommy','Liz']
};


// Video 43 - Dots vs. Bracket Notation 

console.log(aaron.friends[0]);
console.log(aaron.age);

console.log(aaron['lastName']);


const interestIn = prompt('What do you want to know about aaron? 1. firstName 2. lastName 3. age 4. job 5. friends');

if (aaron[interestIn]){
    alert(aaron[interestIn]);;
}
else {
    alert('Wrong Request :(');
}


// Add new properties to object
aaron.location = 'Michigan'
aaron['insta'] = 'aarontellis'

console.log(aaron);

// Challenege 
// First friends is the best friend

const phrase = `${aaron.firstName} has ${aaron.friends.length} friends and his best friend is ${aaron.friends[0]}`;
console.log(phrase); 



// Video 44 - Object Methods

const aaron = {
    firstName: 'aaron',
    lastName: 'tellis',
    birthYear: 1996,
    job: 'Developer',
    friends: ['Greg','Tommy','Liz'],
    hasDriversLicense: true,

    // Object Method - function expression
    calcAge: function(){
        return 2023 - this.birthYear;
    },
    getSummary: function(){
        return `Aaron is a ${this.calcAge()}-year old ${this.job}. Has ${this.hasDriversLicense ? 'his':'no'} drivers license?`;
    }
};

console.log(aaron.calcAge());
console.log(aaron.getSummary());
console.log(aaron);



// Video 45 - Coding Challenege 3 (Object Methods)

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass/(this.height**2);
        return this.bmi;
    }
}

const john =  {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass/(this.height**2);
        return this.bmi;
    }
}

console.log(mark,john);
console.log(mark.calcBMI(),john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName} has a higher BMI: ${mark.bmi} than ${john.fullName} with BMI: ${john.bmi}`);
}
else{
    console.log(`${john.fullName} has a higher BMI: ${john.bmi} than ${mark.fullName} with BMI: ${mark.bmi}`);
}



// Video 46 - Loops Intro

for(let rep=1; rep<=10; rep++){
    console.log(`lifting weights: rep ${rep}`)
}



// Video 47 - Looping Arrays, Breaking, and Continue

const firstName = 'Aaron';
const friends = ['Michael','Steven','Peter'];
const aaron = new Array(firstName,'Tellis',2023-1996,'Developer',friends,true);

const aaronTypes = []

for (let i=0;i<aaron.length;i++){
    
    // Reading array
    console.log(aaron[i],typeof aaron[i]);
    
    // Filling types array
    aaronTypes.push(typeof aaron[i]);
}

console.log(aaronTypes);

const years = [1991,2007,1969,2020];
const ages = [];

for(let i=0;i<years.length;i++){
    ages.push(2023 - years[i]);
}

console.log(ages);

// continue and break

console.log('----Continue-----')
for (let i=0;i<aaron.length;i++){
    if (typeof aaron[i] === 'string'){
        console.log(aaron[i]);
    }
    else{
        continue;
    }
}

console.log('----Break-----')
for(let i=0;i<aaron.length;i++){
    if (typeof aaron[i] === 'number'){
        break;
    }
    else{
        console.log(aaron[i]);
    }
}



// Video 48 - Looping Backwards and Loops in Loops

const firstName = 'Aaron';
const friends = ['Michael','Steven','Peter'];
const aaron = new Array(firstName,'Tellis',2023-1996,'Developer',friends,true);

// Loop backwards
for(let i=aaron.length-1;i>=0;i--){
    console.log(i,aaron[i]);
}

// Loop in Loop
for (let exercise=1;exercise<=3;exercise++){
    console.log(`------- Starting exercise ${exercise}`);

    for (let rep=1;rep<=5;rep++){
        console.log(`rep ${rep}`);
    }

}



// Video 49 - While Loop

// for (let rep = 1;rep<=10;rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// While Loop
console.log('-----While Loop-------');
let rep = 1;
while(rep<=10){
    console.log(`Lifting weights repetition ${rep} 🏋️`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice!==6){
    console.log(`You lose. Roll again! ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
}

console.log('Congrats you rolled a six!');



// Video 50 - Coding Challenege (Loops)

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

const calcTip = function(bill){
    return bill>= 50 && bill <= 300 ? bill*.15:
    bill*.20
}

for(let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
    totals.push(tips[i]+bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i]
    }
    return total/arr.length
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

*/ 'use strict';