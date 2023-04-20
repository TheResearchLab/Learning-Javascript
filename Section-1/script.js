/*
// Video 12 - Data types

// Dynamically typed variable
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

// Change the value in a variable
javaScriptIsFun = 27;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

console.log(typeof null); // outputs and object instead of null


// Video 13 - Let, Const, Var

let age = 30;
age = 31; // mutate age variable

const birthYear = 1991; // immutable variable
//birthYear = 1990; // causes error

// can't have empty const variable either
// const job; 

// works similar to let in use
var job = 'programmer'
job = 'surgeon'

// Doesn't create variable in the scope? Need to declare
lastName = 'Tellis';
console.log(lastName);


// Video 14 - Basic Operators

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log("the difference between Jonas and Sarah's age is",ageJonas - ageSarah, "years.");

// print concatenated strings with space. 
firstName = 'Aaron';
lastName = 'Tellis';
console.log(firstName + " " + lastName ); // add space

// assignment operators
let x = 10 + 5; // 10 + 5 first then assign to x. so x = 15
x += 10; // adds 10 to x. x =25
x *= 4; // multiplies x by 4. x =100
x++; // adds one to x. x = 101
console.log(x);

// comparison operator
console.log(ageJonas >= ageSarah); // results in true
console.log(ageJonas == ageSarah); // returns false

const isFullAge = ageSarah >= 18; // creates a boolean result
console.log(isFullAge);


// Video 15 - Operator Precedents

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 >= now - 2018);

// assign two values in 1 line
let x, y; // declare empty variables
x = y = 25 - 10 -5; // evaluates from right to left
console.log(x,y);

// Grouping in paranthesis operates first
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas,ageSarah, averageAge)


// Video 16 - Coding Challenge 1

// ----------------------------------------------TEST DATA 1--------------------------------------------------

// Declare Mark's Height and weight
let markWeight,markHeight;
markWeight = 78;
markHeight = 1.69;

// Declare John's height and weight
let johnWeight,johnHeight;
johnWeight = 92;
johnHeight = 1.95;


// BMI Calculation
let markBmiCalc = markWeight/(markHeight**2);
let johnBmiCalc = johnWeight/(johnHeight**2);

let markHigherBMI = markBmiCalc > johnBmiCalc;

console.log("Mark's BMI:" + markBmiCalc,"John's BMI:" + johnBmiCalc);
console.log("mark has a higher is:" + markHigherBMI);



// ----------------------------------------------TEST DATA 2--------------------------------------------------

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBmiCalc = markWeight/(markHeight**2);
johnBmiCalc = johnWeight/(johnHeight**2);


console.log("Mark's BMI:" + markBmiCalc,"John's BMI:" + johnBmiCalc);
markHigherBMI = markBmiCalc > johnBmiCalc;

console.log("mark has a higher is:" + markHigherBMI);


// Video 17 - Template Literals

const firstName = 'Aaron';
const job = 'developer';
const birthYear = 1996;
let year = 2037;

// This is confusing
const aaron = "I'm " + firstName + ", a " + (year - birthYear) + " year old."
console.log(aaron)

// Template Literals
const aaronNew = `I'm ${firstName} a ${year} - ${birthYear} year old ${job}!`;
console.log(aaronNew);


// multi line string -
console.log('String with \n\
multiple \n\
lines.')

console.log(`String with 
multiple 
lines.`)


// Video 18 - Taking decisions if/else  statements

const age = 15;
const isOldEnough = age >= 18;


if (isOldEnough)
{
    console.log('Cigarettes please');
}
else 
{
    const yearsLeft = 18 - age
    console.log(`Snickers please
    Wait another ${yearsLeft} years.`);
}

const birthYear = 2001;
let century;

if (birthYear<=2000)
{
    century = 20;

}
else 
{
    century = 21;
}

console.log(century)


// Video 19 - Coding Challenege #2 IF/ELSE

// Declare Mark's Height and weight
let markWeight,markHeight;
markWeight = 78;
markHeight = 1.69;

// Declare John's height and weight
let johnWeight,johnHeight;
johnWeight = 92;
johnHeight = 1.95;


// BMI Calculation
let markBmiCalc = markWeight/(markHeight**2);
let johnBmiCalc = johnWeight/(johnHeight**2);

let markHigherBMI = markBmiCalc > johnBmiCalc;

if (markHigherBMI)
{
    console.log(`Mark's BMI of ${markBmiCalc} is higher than John's ${johnBmiCalc}.`)
}
else
{
    console.log(`John's BMI of ${johnBmiCalc} is higher than Mark's.`)
}


// Video 20 - Type Conversion and Coercion

// Type conversion
const inputYear = '1991';
const firstName = 'Aaron';

console.log(Number(inputYear) + 18); // type conversion
console.log(Number(firstName)); // Not a number
console.log(typeof Number(firstName)); // Number type

// Type Coercion
console.log(`I am ` + 23 + ` years old.` ); // plus symbol converts numbers to strings
console.log('23' - '10' - 3); // minus converts strings to numbers
console.log('23' * '4');



// Video 21 - Truthy and Falsy Values


// 5 falsy values: 0,'',undefined, null, NaN all turn false when converted to a boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('aaron'));
console.log(Boolean({})); // empty object is true

let money = 0;
money += 100

if (money)
{
    console.log("don't spend it all");
}
else
{
    console.log("you need to save");
}

let height;

if (height)
{
    console.log('height is defined');
}
else
{
    console.log("height is undefined");
}



// Video 22 - Equality operators

const age = 18;

// strict equality operator
 if (age === String(18)) 
 {
    console.log("you just became an adult.");
 }
 else
 {
    console.log("false");
 }

 // Loose equality operator example
 if (age == String(18)) // strict equality operator
 {
    console.log("you just became an adult.");
 }
 else
 {
    console.log("false");
 }

 favNumber = prompt("What is your favorite number");

 if (favNumber === 18) console.log("that's a great number") // does not log

 // Else If Block
 if (favNumber == 18) 
 {
    alert("that's a great number") // does work
 }
 else if (favNumber == 7)
 {
    alert("7 is also a cool number")
 }
 else
 {
    alert("your number is not cool :(")
 }

 // !== (strict different) != (loose different)
 if (favNumber !== 23) console.log("why not 23");


// Video 23 - Boolean Logic

const age = 16;
const greaterTwenty = age > 12;
const lessThanThirty = age < 30;

console.log(lessThanThirty);


// Video 24 - Logical Operators

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision); // && and in javascript
console.log(hasDriverLicense || hasGoodVision); // || or operator
console.log(!hasDriverLicense);


// const shouldDrive = hasDriverLicense && hasGoodVision ;

// if (shouldDrive)
// {
//     console.log('Sarah is able to drive');
// }
// else
// {
//     console.log('Someone else should drive');
// }

const isTired = true; 

console.log(hasDriverLicense && hasGoodVision && isTired); // && and in javascript
console.log(hasDriverLicense || hasGoodVision || isTired); // || or operator

const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if (shouldDrive)
{
    console.log('Sarah can drive');
} 
else
{
    console.log('Someone else should drive');
}


// Video 25 - Coding Challenge 3

// Test Data 1
let koalasAvgScore = (88 + 91+ 110)/3
let dolphinsAvgScore = (96 + 108 + 89)/3

// Test Data 2
koalasAvgScore = (109+95+123)/3
dolphinsAvgScore = (97+112+101)/3


// Test Data 3
//koalasAvgScore = (109+95+106)/3
//dolphinsAvgScore = (97+112+101)/3

if (koalasAvgScore > dolphinsAvgScore)
{
    console.log("Koalas Win!")
}
else if (koalasAvgScore < dolphinsAvgScore)
{
    console.log("Dolphins Win!")
}
else 
{
    console.log("It's a draw")
}

// Bonus 2  - 100pts minimum and applies to draws

const minScore = 100;
const koalasGreaterThanMin = koalasAvgScore >= minScore;
const dolphinsGreaterThanMin = dolphinsAvgScore >= minScore;
const isDraw = koalasAvgScore === dolphinsAvgScore;

if (koalasAvgScore > dolphinsAvgScore && koalasGreaterThanMin )
{
    console.log(`Koalas Win! Koalas:${koalasAvgScore} Dolphins:${dolphinsAvgScore}`);
}
else if (koalasAvgScore < dolphinsAvgScore && dolphinsGreaterThanMin)
{
    console.log(`Dolphins Win! Koalas:${koalasAvgScore} Dolphins:${dolphinsAvgScore}`);
}
else if (isDraw && koalasGreaterThanMin && dolphinsGreaterThanMin )
{
    console.log(`It's a draw! Koalas:${koalasAvgScore} Dolphins:${dolphinsAvgScore}`)
}
else 
{
    console.log(`No Winners! Koalas:${koalasAvgScore} Dolphins:${dolphinsAvgScore}`)
}


// Video 26 - The switch statement

const day = 'monday'

switch(day)  // day === 'monday'
{
    case 'monday':
        console.log('Plan your course structure');
        console.log('Go to coding meetup');
        break; // break stops code from executing
    case 'tuesday':
        console.log('prepare theory videos')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}


// Video 27 - Statements and Expressions

// Expression - produces value
    // 3 + 4
    // 1991
    // true && false && !true

// Statements - Performs some action but doesn't produce a value
    // if (23/10)
    // {
    //     console.log("23 is bigger");
    // }


// Video 28 - The conditional Ternary Operator (One line if else statement)
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷'):
console.log('I like to drink water 💧');

//
const drink = age>=18 ? 'I like wine 🍷': 'water 💧';
console.log(drink);


//Video 29 - Coding Challenge 4

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill*.15:
        bill*.20;

console.log(`bill:${bill}, tip:${tip}, total:${bill+tip}`);
*/
