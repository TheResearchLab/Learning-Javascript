'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



// Video 147 - Creating DOM Elements


const displayMovement = function(movements,sort = false) {

  containerMovements.innerHTML = '' // This clears the element

  const movs = sort ? movements.slice().sort((a,b)=>a-b):movements // slice returns a copy
  movs.forEach(function(mov,i) {
    
    const transType = mov > 0 ? `deposit`:`withdrawal` ;
    
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${transType}">${i+1} ${transType} </div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin',html); 

  })
}

displayMovement(account1.movements)
//console.log(containerMovements.innerHTML); // this the html we just created

// Create Balance

const calcDisplayBalance = function(account) {
  account.currBalance = account.movements.reduce((acc,mov) => acc + mov,0);
  labelBalance.textContent = `${account.currBalance}€`;
}

const calcDisplaySummary = function(account) {
  const incomes = account.movements.filter(mov => mov>0)
                         .reduce((acc,mov) => acc+mov);
  labelSumIn.textContent = `${incomes}€`

  const out = account.movements.filter(mov => mov<0)
                       .reduce((acc,mov) => acc+mov);
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = account.movements.filter(mov=>mov>0)
                            .map(deposit=>deposit*(account.interestRate/100))
                            .filter(int=>int>1)
                            .reduce((acc,int)=>acc+int,0)
labelSumInterest.textContent = `${interest}€`;  

}




//calcDisplayBalance(account1.movements) // Get balance to display
//calcDisplaySummary(account1.movements)

// Maximum Value

const max = movements.reduce((acc,mov)=> acc>mov ? acc: mov,movements[0])
//console.log(max);


// Video 151 - Computer Usernames

// const createUsername = name => name.toLowerCase().split(' ').map(name => name[0]).join('')
// console.log(createUsername('Steven Thomas Williams'));
// const nameArr = ['name one','name two','name three four']
// console.log(nameArr.map(createUsername));

const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(acc => acc[0]).join('')
  })
}

//console.log(accounts);
createUsernames(accounts)
//console.log(accounts);



//Update UI
const updateUI = function(acc){
  // Display Movements
  displayMovement(acc.movements)
  // Display Balance
  calcDisplayBalance(acc)
  // Display Summary
  calcDisplaySummary(acc)
}




// Current Account
let currAccount;


// Video 158 - Implementing Login button
btnLogin.addEventListener('click',function(evt){
  // prevent form from submitting
  evt.preventDefault();
  currAccount = accounts.find(acc=> acc.username === inputLoginUsername.value)
  if(currAccount?.pin === Number(inputLoginPin.value)) console.log('LOGIN'); // Optional Chaining Example

  // Display UI and Welcome Message
  labelWelcome.textContent = `Welcome back, ${currAccount.owner.split(' ')[0]}`;
  containerApp.style.opacity = 100;

  // Clear Input Fields
  inputLoginUsername.value = inputLoginPin.value = '' //operator works from right to left 
  inputLoginPin.blur();


  // Update UI
  updateUI(currAccount)


})

//Video 159 - Implementing Transfers
btnTransfer.addEventListener('click',function(evt){
  evt.preventDefault();// prevent  page refresh, common when working with forms
  const amount = Number(inputTransferAmount.value) 
  const receiverAcc = accounts.find(acc=>acc.username === inputTransferTo.value)
  inputTransferTo.value = inputTransferAmount.value = ''

  // Find if the transfer is valid
   if(amount>0 && 
      currAccount.currBalance >= amount  && 
      receiverAcc &&
      receiverAcc?.username !== currAccount.username) {
        // deduct amount from current account and add to receiveAcc
        currAccount.movements.push(-amount)
        receiverAcc.movements.push(amount)

        

        // Update UI
        updateUI(currAccount)

      } else {
        console.log('Invalid Transfer');}
    

})


btnClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  const user = inputCloseUsername.value;
  const pin = Number(inputClosePin.value)

  if(user !== currAccount.username || pin !== currAccount.pin) {
    console.log('Invalid Creds');
  } else {
    const index = accounts.findIndex(acc=>acc.username===currAccount.username)
    console.log(accounts);
    // Delete user
    accounts.splice(index,1)
    console.log(accounts);

    // Log em out
    containerApp.style.opacity = 0;

  }

  inputClosePin.value = inputCloseUsername.value = ''
})


btnLoan.addEventListener('click',function(evt) {
  evt.preventDefault();
  const loanAmt = Number(inputLoanAmount.value)

  // Evaluate loan request
  if(loanAmt>0 && currAccount.movements.some(mov=>mov>=loanAmt*.10)) {
    currAccount.movements.push(loanAmt)
    updateUI(currAccount)
  }

  inputLoanAmount.value = ''
})

let isSorted = false;
btnSort.addEventListener('click',function(evt) {
  evt.preventDefault();
  displayMovement(currAccount.movements,!isSorted)
  isSorted = !isSorted

  }
)




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*


// Video 141 - Working with arrays

// Slice Method
let arr=['a','b','c','d','e'];
console.log(arr.slice(2)) // returns a copy after extractions
console.log(arr.slice(-3)) 
console.log(arr.slice(2,-1)) // grab everything except the last x

console.log([...arr])

// Splice Method
console.log(arr.splice(2)); // splice mutates part of the array
console.log(arr);
console.log(arr.splice(0,1)); // position 0 and remove one element

// Reverse
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse()); // Reverse does mutate


// Concat - Does not mutate
const letters = arr.concat(arr2);
console.log(letters);

// Join the letters
console.log(letters.join('-'));


// Video 143 - The At Method

// Reminder - Shift
const arr = [23,11,64]
console.log(arr.shift());
console.log(arr);

// At method
console.log(arr[0]); // old way
console.log(arr.at(0)) // new way

// getting the last element - old way
console.log(arr.slice(-1)[0]);
console.log(arr[arr.length - 1]);
console.log(arr.at(-1)); // new way
console.log('aaron'.at(-2)); // returns o
console.log('aaron'.slice(-2)); // returns on





// Video 144 - Looping Arrays: forEach


// For Of 
for (const [i,movement] of movements.entries()) { // Get current index
//for (const movement of movements) {
  if(movement>0) {
    console.log(`Movement ${i+1}: You deposited ${movement} dollars`);
  } else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('--------------------FOR EACH METHOD--------------------------');

movements.forEach(function(mov,i,arr) { // order of parameters current element, index, complete array
  if(mov>0) {
    console.log(`Movement ${1 + i}: You deposited ${mov} dollars`);
  } else {
    console.log(`Movement ${1 + i}: You withdrew ${Math.abs(mov)}`);
  }
  console.log(...arr);
})

// For each can't break out of a loop


// Video 145 - For Each in Maps and Sets


// Map Example
currencies.forEach(function(value,key,map) {
  console.log(`${key}:${value}`);
})

// Set
const currenciesUnique = new Set(['USD','GBP','EUR']);

currenciesUnique.forEach(function(key,_,set) {
  console.log(`${key}: ${_} \n`,...set); // Sets don't have keys but they just get the value as the key 
})


//Video 146 - Project Bankist App - overview


// Video 148 - Coding Challenege #1


const julia1 = [3,5,2,12,7]
const kate1 = [4,1,15,8,3]

const julia2 = [9,16,6,8,3]
const kate2 = [10,5,6,1,4]


const checkDogs = function(juliaArr,kateArr) {
  const newJuliaArr = juliaArr.slice(1,-2);
  //const combArr = [...newJuliaArr,...kateArr]; // Another way to combine
  const combArr = newJuliaArr.concat(kateArr);; 
  console.log(combArr);
  
  combArr.forEach(function(age,i) {
    if(age>=3) {
      console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i+1} is still a puppy 🐶`);
    }
  })
}

checkDogs(julia1,kate1);
checkDogs(julia2,kate2);


// Video 149 - Map, Filter, Reduce (Theory)

// Video 150 - Map Method

const eurToUSD = 1.1;

const movementsUSD = movements.map(mov => mov*eurToUSD) // arrow function
console.log(movements);
console.log(movementsUSD);

const movementDescriptions = movements.map((mov,i) => {
  return `Movement ${i+1}: You ${mov>0?'deposited':'withdrew'} ${Math.abs(mov)} dollars`
});

console.log(movementDescriptions);


// Video 152 - Filter Method
const deposits = movements.filter(function(mov) {
  return mov > 0;
})

console.log(movements);
console.log(deposits);

// withdrawals
const withdrawals = movements.filter(mov=>mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);



// Video 153 - The reduce Method

const balance = movements.reduce(function(accum,cur,i){
  console.log(`Iteration ${i}: ${accum}`); // accum short for accumulator
  return accum + cur
},0) // Zero is the initial value of the accumulator

console.log(balance);


// Video 154 - Coding Challenge #2

const dogArr1 = [5,2,4,1,15,8,3]
const dogArr2 = [16,6,10,5,6,1,4]

const calcAverageHumanAge = function(dogArr){
  const humanYears = dogArr.map(dogAge => dogAge>2? 16 + (dogAge*4): 2*dogAge )
  const adultDogs = humanYears.filter(age=> age >=18)
  const avg = adultDogs.reduce((acc,age)=>acc+=age,0) / adultDogs.length
  return avg
}

console.log(dogArr1);
console.log(calcAverageHumanAge(dogArr1));
console.log(calcAverageHumanAge(dogArr2));


// Video 155 - The Magic of Chanining Methods

const eurToUSD = 1.1;
// Pipeline - is hard to debug
const totalDepositsUSD = movements.filter(mov=>mov>0)
                                  .map((mov,i,arr)=>{
                                    console.log(arr);
                                    return mov*eurToUSD
                                  }).reduce((acc,mov) => acc+mov,0);
console.log(totalDepositsUSD);


// Video 156 - Coding Challenge #3

const dogArr1 = [5,2,4,1,15,8,3]
const dogArr2 = [16,6,10,5,6,1,4]

const calcAverageHumanAge = function(dogs){
  const avg = dogs.map(dogAge => dogAge>2? 16 + (dogAge*4): 2*dogAge)
                        .filter(age=> age >=18)
                        .reduce((acc,age,i,arr)=>{
                          console.log(acc+age,arr)
                          return acc+age/arr.length
                        },0) 

  return avg;
}

console.log(calcAverageHumanAge(dogArr1));
console.log(calcAverageHumanAge(dogArr2));


// Video 157 - Find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc=>acc.owner === 'Jessica Davis')
console.log(account);


// Video 161 - Some and Every
console.log(movements);
console.log(movements.includes(-130)); // Equality
console.log(movements.some(mov=>mov === -130)); // Condition

// Some - check any condition
const anyDeposits = movements.some(mov=>mov>1500);
console.log(anyDeposits);

// Every - if every element passes
const everyDeposit = account4.movements.every(mov=>mov>0);
console.log(everyDeposit);

// Separate callback - similar idea to event listeners
const deposit = mov => mov > 0;
console.log(movements.some(deposit));


// Video 162 flat and flatMap 
const arr = [[1,2,3],[4,5,6],7,8]
console.log(arr.flat());
const arrDeep = [1,9,[2,8,[3,7,[4,6,[5]]]],13]
console.log(arrDeep.flat(4)); // argument for depth


const accMovements = accounts.map(acc=>acc.movements);
const allMovements = accMovements.flat()
console.log(allMovements);
//const overallBalance = allMovements.reduce((acc,mov) =>acc+mov,0)
//console.log(overallBalance); // can also build with chaining

// flatMap
const overallBalance = accounts
.flatMap(acc=>acc.movements) // does flat and map together, also can only go one level deep.
.reduce((acc,mov) => acc+mov)

console.log(overallBalance);


// Video 163 - Sorting Arrays

const owners = ['Jonas','Zach','Adam','Martha']
console.log(owners.sort());
console.log(owners); //Changes order in array

// Numbers
console.log(movements);
console.log(movements.sort()); // sorted based on strings

// return < 0, A,B (return negative: keep order)
// return > 0, B,A (return positive: switch order)
movements.sort((a,b)=> a-b) // ascending order
console.log(movements);
movements.sort((a,b)=> b-a) // descending order
console.log(movements);


// Video 164 - More ways of creating and filling arrays
console.log([1,2,3,4,5,6,7,8]);
console.log(new Array(1,2,3,4,5,6,7,8));

// Empty arrays + fill method
const x = new Array(7); //when one argument then returns empty array with size of parameter
console.log(x);

//x.fill(1)
//x.fill(1,3) // fill with 1s and start at index 3
x.fill(1,2,5) // fill with 1s, start at index 2, finish at 5
console.log(x);

// Array.from 
const y = Array.from({length:7},()=>1);
console.log(y);

const z = Array.from({length:7},(_,i)=>i+1) // _ throw away value
console.log(z);


const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI);

labelBalance.addEventListener('click',function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el=>el.textContent.replace('€','')); // add callback in 'from 'method as well
  console.log(movementsUI);

  console.log([...document.querySelectorAll('.movements__value')]);
})


// Video 166 - More Array Practice

// Exercise 1
const totalBankDeposits = accounts.flatMap(acc=>acc.movements)
                                  .filter(mov=>mov>0)
                                  .reduce((acc,cur)=>acc+cur,0);
console.log(totalBankDeposits);
//console.log(totalBankDeposits.reverse());

// Exercise 2 - Part A Filter and length
const oneGrandOrMoreEasy = accounts.flatMap(acc=>acc.movements)
                               .filter(mov=>mov>=1000).length
console.log(oneGrandOrMoreEasy);

// Exercise 2 - Part B Reduce and ternary operator
const oneGrandOrMoreReduce = accounts.flatMap(acc=>acc.movements)
                               .reduce((cnt,cur)=>cur>=1000?++cnt:cnt,0) // plus plus won't work here unless prefix
console.log(oneGrandOrMoreReduce);

// Plus plus operator
let a = 10;
console.log(a++); // logs 10 and not 11... returns previous value
console.log(a); // now 11 shows
console.log(++a); // returns 12

// Exercise 3 - directly create an object based on reduce method
const {deposits,withdrawals} = accounts.flatMap(acc=>acc.movements).reduce((sums,cur)=>{
  sums[cur > 0?'deposits':'withdrawals'] += cur; return sums},{deposits:0,withdrawals:0}); // need to return when function body is there

console.log(deposits,withdrawals);

// Excercise 4 - string to title case
const convertTitleCase = function(title) {
  const exceptions = ['a','and','the','but','or','on','in','with']
  const capitalize = str=>str[0].toUpperCase() + str.slice(1);
  const titleCase = title.toLowerCase().split(' ').map(word=>exceptions.includes(word)?word:capitalize(word)).join(' ')
  
  console.log(capitalize(titleCase));
}

convertTitleCase('convert this string to title case and do not mess up');
convertTitleCase('This is a LONG title but not too long');
convertTitleCase('and here is ANOTHER title WIth an example')
*/

// Video 167 - Coding Challenge #4

/*Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)


TEST DATA:

*/




// 1)
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

dogs.forEach(function(dog){
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
}) 

// 2)
dogs.forEach(function(dog){
  if(dog.owners.includes('Sarah')) dog.curFood > dog.recommendedFood? console.log('Too Much'):console.log('Too little!');  
}) 

// 3)
const ownersEatTooMuch = dogs.filter(acc=>acc.curFood>acc.recommendedFood).flatMap(acc=>acc.owners)
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(acc=>acc.curFood<acc.recommendedFood).flatMap(acc=>acc.owners)
console.log(ownersEatTooLittle);

// 4)
console.log(`${ownersEatTooMuch.join(',')}'s dogs eat too much and ${ownersEatTooLittle.join(',')}'s eat too little!`);

// 5)
console.log(

(function(){
  return Boolean(dogs.find(acc=>acc.curFood===acc.recommendedFood)) || false 
})()

)

// 6)
console.log(Boolean(dogs.find(acc=>acc.curFood<=(acc.recommendedFood*1.1) && acc.curFood>=(acc.recommendedFood*.9) ))&&true)

// 7)

const isOkay = (acc) => acc.curFood<=(acc.recommendedFood*1.1) && acc.curFood>=(acc.recommendedFood*.9)? true: false 
const okayDogs = dogs.filter(acc=>isOkay(acc))
console.log(okayDogs);


// 8)
console.log(dogs.slice().sort((a,b)=>a.recommendedFood-b.recommendedFood))