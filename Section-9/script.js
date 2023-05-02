'use strict';

const weekdays = ['mon','tues','wed','thur','fri','sat','sun'];

const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  }
};



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({starterIndex=1,mainIndex,time='20:00',address}){
    console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`)
  },

  // Easier syntax
  orderPizza(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  // ES6 Enhanced Object Literals
  hours
  };

  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    }
  };

  const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

const airLine = 'TAP Air Portugal';
const plane = 'A320neo';

// Data needed for a later exercise
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';






/*
// Video 125 - String Methods Practice 

const fixFlights = function(text){
  const rowSplit = text.split('+')
  
  for (const row of rowSplit){
      // Further split sections
      const [status,fromLoc,toLoc,time] = row.split(';') 
      const finalStatus = status.replaceAll('_',' ')
      const finalFromLoc = fromLoc.slice(0,3).toUpperCase();
      const finalToLoc = toLoc.slice(0,3).toUpperCase();
      const finalTime = time.replace(':','h')

      const beginMessage = finalStatus.toUpperCase().includes('DELAYED') ? String('🔴'+ finalStatus).padStart(20,'-') : finalStatus.padStart(20,'-') ;
      console.log(`${beginMessage} FROM ${finalFromLoc} TO ${finalToLoc} (${finalTime})`);
  }
  
}


fixFlights(flights);



// Video 124 - Coding Challenege

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Convert input text to camel case
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const [idx,input] of rows.entries()){   
    const [first,second] = input.split('_');
    const intRep = first.toLowerCase() + second.replace(second[0],second[0].toUpperCase());
    console.log(intRep.trim().padEnd(20) + ' ✅'.repeat(idx+1))

  }
});

// This_is_a_test
//underscore_case
// first_name
//Some_Variable 
//  calculate_AGE
//delayed_departure





// Working with strings - Part 3

console.log('a+very+nice+string'.split('+')); // split method
console.log('A Very Nice String'.split(' '));

//destructuring
const [firstName,lastName] = 'Aaron tellis'.split(' ');
console.log(firstName,lastName);

const newName = ['Mr.',firstName,lastName.toUpperCase()].join('----')
console.log(newName);

const capitalizeName = function(name){
  const arr = []
  for (const n of name.split(' ')){
    arr.push(n[0].toUpperCase()+n.slice(1));
  };
  console.log(arr.join(' '));
}


capitalizeName('jessica ann smith davis');
capitalizeName('aaron telliS');


// Pad Start
const message = 'Go to gate 25!';
console.log(message.padStart(25,'+'));
console.log(message.padStart(25,'+').length); // length is 25

// Pad End
console.log(message.padStart(25,'+').padEnd(30,'+'));
console.log(message.padStart(25,'+').padEnd(30,'+').length); // length is 30


// Credit Card Example
const creditCardMasker = function(ccNum){
  const ccNumEdit = String(ccNum).replaceAll(' ','');
  ccNumEdit.length === 16 ? console.log(ccNumEdit.slice(-4).padStart(16,'*')):
    console.log('Enter a valid Credit Card Number');
}

creditCardMasker(8888777766665555);
creditCardMasker('12345');
creditCardMasker('1234567891011121')

// Repeat Method
const repeatMessage = 'Bad Weather... All Departures Delayed \n';
console.log(repeatMessage.repeat(5));

const planesInLine = function(n){
  console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(5);
planesInLine(10);
planesInLine(5);



// Video 122 - Working with strings (Part 2)

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix format
const passenger = 'aArON';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower.slice(0,1).toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Compare email
const email = 'hello@aaron.io';
const loginEmail = '  Hello@Aaron.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

console.log(trimmedEmail);

// All in one step

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);

console.log(email===normalEmail);


// replacing
const priceGB = '288,97£'
const priceUS = priceGB.replace('£','$').replace(',','.')
console.log(priceUS);

const announcement = 'Passengers please come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door','gate')); // only removed the first occurence
console.log(announcement.replaceAll('door','gate')); // works now lol
console.log(announcement.replace(/door/g,'gate')); // regular expression

// Booleans
console.log(plane.includes('A320'));
console.log(plane.includes('BOEING'));
console.log(plane.startsWith('A3'));


if(plane.startsWith('A3') && plane.endsWith('neo')){
  console.log('Part of the new Airbus family');
}


// Practice exercise
const checkBaggage = function(items){
  const baggage = items.toLowerCase(); // saves a lot of work
  return baggage.includes('knife') || baggage.includes('gun') ? console.log("You're not allowed here"):
  console.log('Come right on');; 
}


checkBaggage('I have a Laptop, SOME food and a POCKET KNIFE');
checkBaggage('Peach cobbler and shotGun wedding movie');
checkBaggage('Random nonsense');


// Video 121 - Working with strings (Part 1)


console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log('B737'.length);


console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('portugal')); // case sensitive. sends -1

//Slice
console.log(airLine.slice(4)); // returns a substring
console.log(airLine.slice(4,7)); // begin and end parameters. End - Beg = length

console.log(airLine.slice(0,airLine.indexOf(' '))); // returns TAP
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1)); // returns Portugal


console.log('Aaron'.slice(-1)); // returns the last letter
console.log('Aaron'.slice(2,-1));


// In-class challenge
const checkMiddleSeat = function(seat){
  // B and E are middle seats
  return seat.slice(-1) === 'E' || seat.slice(-1) === 'B' ? true: false;
}

console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('23C'));
console.log(checkMiddleSeat('3E'));

//boxing
console.log(typeof new String('Aaron').slice(0)); // new string object converts back to string type


// Video 120 - Coding Challenge 3

// Part 1
const uniqueEvents = new Array(...new Set([...gameEvents.values()]))
console.log(uniqueEvents);

// Part 2
gameEvents.delete(64)
console.log(gameEvents);

// Part 3 - Just print the string?

let avg = 0;
let events = [...gameEvents.keys()];
for (let i=0;i<events.length-1;i++){
  avg = (events[i+1] - events[i]) + (avg || 0)
  console.log(avg);
}
avg /= (events.length-1)

console.log(`An event happened, on average, every ${avg} minutes.`)


// Part 4 - Second vs First Half
for (const [time,evt] of gameEvents.entries()){
  const halfInd = time < 45 ? '[FIRST HALF]': '[SECOND HALF]'
  console.log(`${halfInd} ${time}: ${evt}`);
}


  
// Video 118 - Maps Iteration
const question = new Map([
  ['question','What is the best programming language'],
  [1,'C'],
  [2,'JS'],
  [3,'Go'],
  ['correct',2],
  [true,'Correct 🎊'],
  [false,'Try Again 🤦‍♂️']
]);

console.log(question);
console.log(Object.entries(hours));

// Easy convert object to a map
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

// Iterations
console.log(question.get('question'));
for (const [key,value] of question){
  typeof key === 'number' && console.log(`Answer is: ${key}. ${value}`);
}
 //const userAnswer = Number(prompt('Your answer? 1,2, or 3'));

 //const isCorrect = userAnswer === question.get('correct') || false 
 //console.log(question.get(isCorrect));
 
// Can convert a map to an array
console.log(...question);

// Get map keys, values
//console.log(...question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);



// Video 117 - Maps

const rest = new Map(); // Create a new map 
rest.set('name','Classico Italiano'); //add name
rest.set(1,'Firenze, Italy');
//console.log(rest);

// sets can be chained.
rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open',11).set('close',23).set(true,'we are open').set(false,'we are closed');
//console.log(rest.get(true));
console.log(rest);

const time = 13;
const isOpen = time>rest.get('open') && time<rest.get('close') || false; 
console.log(rest.get(isOpen));

console.log(rest.has('categories')); // maps also have "has" method
rest.delete(1);
console.log(rest);
console.log(rest.size); // also has size instead of length property
//rest.clear() clears map of elements

// Arrays as map key
const objKey = [1,2];
const exMap = new Map();
exMap.set(objKey,'value1');
console.log(exMap.get(objKey));


// DOM elements and Maps
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);


 // Video 116 - Sets
 const ordersSet = new Set(['Pasta',
                            'Pizza',
                            'Pizza',
                            'Pasta',
                            'Risotto'])

  console.log(ordersSet);
  console.log(new Set('Aaron'));
  console.log(ordersSet.size); // size and not length
  console.log(ordersSet.has('Pizza')); // has method is similar to include method from arrays
  console.log(ordersSet.has('Bread'));
  ordersSet.add('Garlic Bread'); // add element to set
  ordersSet.delete('Pizza'); // delete element
 console.log(ordersSet);

 // How to retrieve value
 for (const order of ordersSet) console.log(order);

 // Example remove duplicates from array
 const staff = ['Waiter','Chef','Waiter','Chef','Manager']
 const staffUnique = [...new Set(staff)];
 console.log(staffUnique);
 console.log(ordersSet.size);
 
  

// Video 115 - Coding Challenge  #2

// Part 1 
for (let i=0;i<game.scored.length;i++){
  console.log(`${game.scored[i]} has scored goal ${i+1}.`);
}

// Part 2 
let avg=0;
const odds = Object.values(game.odds)
for (const odd of odds){
  avg += odd;
  }
avg/=odds.length;
console.log(`the avg odd is ${avg}`);
 
// Part 3
for (const item of Object.keys(game.odds)){
  const outcome = item==='x'?'draw:':'victory:'
  console.log(`odds of ${outcome} ${game?.[item] ?? ''} ${game.odds[item]}`);
  }

// Bonus
const scorer = {}
for (const players of Object.values(game.scored)){
  scorer[players] = 1 + (scorer[players] || 0);
}

console.log(scorer);




// Video 114 - Looping Objects: Object Keys, Values, Entries

// Property Names
const properties = Object.keys(hours); 
console.log(properties);


for (const day of properties){
  console.log(day);
}

let openStr = `We are open on ${properties.length} days: `
for (const day of properties){
  openStr += `${day},`
}

console.log(openStr);

// Property Values

const values = Object.values(hours);
console.log(values);

const entries = Object.entries(hours)


for (const [keys,{open,close}] of entries){ // destructuring
  console.log(`On ${keys} we open @ ${open} and close at ${close} `);
}


// Video 113 - Optional Chaining
//console.log(restaurant.hours.mon.open); // this is an error

if ( restaurant.hours && restaurant.hours.mon) console.log(restaurant.hours.mon.open);

// WITH optional chaining
console.log(restaurant.hours?.mon?.open); // returns undefined

const days = ['mon','tues','wed','thur','fri','sat','sun'];

for (const day of days){
  //console.log(day);
  const open = restaurant.hours[day]?.open ?? 'closed'; // nullish coalescing operator
  console.log(`On ${day} we are open at ${open}`);
}

// Methods
console.log(restaurant.order?.(2,0) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(2,0) ?? 'Method does not exist');

// Arrays
const users = [{
  name:'aaron',
  email:'aaron@aaron.com'
}]


console.log(users[0]?.name ?? 'User array empty');






  // Video 112 - Enhanced Object Literals
console.log(restaurant);
restaurant.orderPizza('mushroom','pineappple');


// Video 111 - The for-of loop
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i,el] of menu.entries()){ // destructure + for-of
  console.log(`${i+1}: ${el}`);
}
// Array of arrays with index and element value
console.log([...menu.entries()]);


// Video 110 - Coding Challenge



// Part 1
const players1 = [...game.players[0]]
const players2 = [...game.players[1]]
//const [players1,players2] = game.players;

// Part 2
const [gk,...fieldPlayers] = players1;

// Part 3
const allPlayers = [...players1,...players2]

// Part 4
const players1Final = [...players1,'Thiago','Coutinho','Perisic']

// Part 5
const {team1,x:draw,team2} = game.odds;
console.log(team1,draw,team2);
// const {odds:{team1,x:draw,team2}} = game;

// Part 6
function printGoals(...playerNames){
  for (let i=0;i<playerNames.length;i++){
    console.log(playerNames[i]);
  }
  console.log(`There were ${playerNames.length} total scores`);

}

printGoals('Davies','Muller','Lewandowski','Kimmich')
printGoals(...game.scored)


// Part 7
team1 < team2 && console.log('Team 1 More Likely to Win') 
team2 < team1 && console.log('Team 2 More Likely to Win') 


// Video 109 - Logical Assignment Operators
const rest1 = {
  name:'Capri',
  //numGuests: 20
  numGuests:0 // 0s causing problems because they are falsy
}

const rest2 = {
  name:'La Piazza',
  owner: 'Giovanni Rossi'
}

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10; // Short-Circuting


// OR assignment Operator
//rest1.numGuests ||= 10;
//rest2.numGuests ||=10; // doesn't work

rest1.numGuests ??=10;
rest2.numGuests ??=10;

rest2.owner &&= '<ANONYMOUS>'
rest1.owner &&= '<ANONYMOUS>'

console.log(rest1);
console.log(rest2);



// Video 108 - The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);


const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);



// Video 107 - Short Circuiting (&& and ||)

console.log('----OR-----');
// Use Any data type, return any data type, short-circuting
console.log(3||'aaron'); //
console.log(''||'aaron');
console.log(true||0);
console.log(undefined||null); // returns null even for falsy


console.log(undefined || '' || 0 || 'Hello' || 23 || null);

restaurant.numGuests = 23
const guest1 = restaurant.numGuests ? restaurant.numGuests:10
console.log(guest1);


const guest2 = restaurant.numGuests || 10
console.log(guest2);

console.log('----AND-----');

console.log(0&&'aaron');
console.log(77&&'aaron');

console.log('Hello' && 23 && null && 'aaron');


// REPLACE IF STATEMENT EXAMPLE
// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms','spinach')
// }


console.log(Boolean(restaurant.orderPizza));                  
restaurant.orderPizza || restaurant.orderPizza('mushroom','spinach')
restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach')




// Video 106 - Rest Patterns and Parameters

// SPREAD, because on RIGHT side of = sign
const arr = [1,2, ...[3,4,5]]
console.log(arr);

// REST, because on LEFT side of = sign 
const [a,b,...others] = [1,2,3,4,5]; // other takes the remaining elements
console.log(a,b,others);

// destructure and spread operator
const [pizza,,rissoto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu]
console.log(pizza,rissoto,otherFood);

// Objects
const {sat,...weekdays} = restaurant.openingHours; // this won't work on just restaurant 
console.log(sat);
console.log(weekdays);

// Functions
const add = function(...numbers){
  let tot=0;
  for (let i=0;i<numbers.length;i++){
    tot+=numbers[i]
  }
  return tot
}

console.log(add(1,2));
console.log(add(2,3,4,5,6,7,8,9));

const x = [23,5,7]
console.log(add(...x))

// Specify as many arguments as you want. Result of REST argument
restaurant.orderPizza('pineapple','beef','mushroom','chicken');
restaurant.orderPizza('garlic');


// Video 105 - The spread operator
const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const goodNewArr = [1,2,...arr]
console.log(goodNewArr);

console.log(...goodNewArr);

// Create new menu
const newMenu = [...restaurant.mainMenu,'Gnocci']
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy ... similar to object.assign

// Join 2 arrays
const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);
console.log([...restaurant.name]); // spread operator works on all iterables
//console.log(`${...menu} words`); // This does not work

// Order Pasta - real world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"),
//                      prompt('Ingredient 2?'),
//                      prompt('Ingredient 3?')];
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn:1987,...restaurant,founder:'Guiseppe'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Copy Name';
console.log(restaurantCopy.name); // we made a real copy!
console.log(restaurant.name);


// const expArr = [...arr].unshift(1); // Spread Operator
// console.log(expArr); // Outputs 4?




// Video 104 - Object Destructuring

const {name, openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

const {name:restaurantName,
       openingHours:hours,
       categories:tags} = restaurant;

console.log(restaurantName,hours,tags);

// Default values
const {menu=[],starterMenu:starters = []} = restaurant;
console.log(menu,starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14};

({a,b} = obj) // Need parenthesis
console.log(a,b);

// Nested objects
const {fri:{open:o,close:c}} = openingHours; // This is crazy behavior 
console.log(o,c);

// Call new function
restaurant.orderDelivery(restaurant);
restaurant.orderDelivery({time:'22:30',
                          address: 'Via del Sole, 21',
                          mainIndex:2,
                          starterIndex:2});




// Video 103 - Destructuring Arrays
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;

console.log(x,y,z);

// Want the first and second
//const [first,second] = restaurant.categories
//console.log(first,second);

// Want the first and third
//const [first,,third] = restaurant.categories; // skip position in arr
//console.log(first,third);

// Main and Secondary example switching variables
// let [main,secondary] = restaurant.categories;
// console.log(main,secondary);

// const temp = main;
// main = secondary
// secondary = temp;
// console.log(main,secondary); // They are now flipped

// [main,secondary] = [secondary,main] // Destructuring Array
// console.log(main,secondary);


// Ordering from Restaurant - destructuring array
const [starter,main] = restaurant.order(3,0)
console.log(starter,main);

// Nested Destructuring
const nested = [2,4,[5,6]];
//const [i,,j] = nested;

const [i,,[j,k]] = nested;
console.log(i,j,k);


// Default values
const [p=1,q=1,r=1] = [8];
console.log(p,q,r); //undefined for r
*/