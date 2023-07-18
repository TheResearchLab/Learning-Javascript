'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2023-05-07T23:36:17.929Z',
    '2023-05-11T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions


const printDate = function(date,locale) {
    const options = {
    hour:'numeric',
    minute:'numeric',
    day:'numeric',
    month:'numeric', // can also do long
    year: 'numeric', //can also pass '2-digit'
    //weekday: 'long' // can also do 'short'
  } 

  return new Intl.DateTimeFormat(locale,options).format(date) // Vid 178
}






const formatDate = function(date=new Date) {
  const today = new Date
  const getDaysBetween = (date1,date2) => Math.abs(+date1 - Number(date2))/(1000 * 60 * 60 * 24);
  const daysPassed = Math.round(getDaysBetween(date,today));
  if(daysPassed === 0) return 'Today'
  if(daysPassed === 1) return 'Yesterday'
  if(daysPassed <= 7) return `${daysPassed} days ago`
  
  return printDate(date,currentAccount.locale)
  
 
}

function formatCur(value,locale,currency) {
  const formattedMov = new Intl.NumberFormat(locale,{
    style:'currency',
    currency: currency
  }).format(value)
  return formattedMov;
}




const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i])
    const displayDate = formatDate(date)
    const formatTrans = formatCur(mov,acc.locale,acc.currency)
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatTrans}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });

  
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formatBal = formatCur(acc.balance,acc.locale,acc.currency)
  labelBalance.textContent = `${formatBal}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const formatIncome = formatCur(incomes,acc.locale,acc.currency)
  labelSumIn.textContent = `${formatIncome}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const formatOut = formatCur(out,acc.locale,acc.currency)
  labelSumOut.textContent = `${formatOut}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
    const formatInterest = formatCur(interest,acc.locale,acc.currency)
  labelSumInterest.textContent = `${formatInterest}`;
};


const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};




const startLogOutTimer = function(){
  const tick = function(){

      
      const min = Math.floor(time /60);
      const sec = String(time % 60).padStart(2,0);
      labelTimer.textContent = `${min}:${sec}`;
     
      if(time===0) {
        clearInterval(timer)
        labelWelcome.textContent = 'Log in to get started';
        containerApp.style.opacity = 0
    }
    time--;
  }

  let time = 300//5 * (1000*60)

  // Call the timer every second
  tick();
  const timer = setInterval(tick,1000)
  return timer;
}
  

  





///////////////////////////////////////
// Event handlers
let currentAccount,timer;

// // // Fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// const now = new Date();
// const options = {
//   hour:'numeric',
//   minute:'numeric',
//   day:'numeric',
//   month:'long',
//   year: 'numeric', //can also pass '2-digit'
//   weekday: 'long' // can also do 'short'
// }
// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale,options).format(now) // Vid 178



// // day/month/year



btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  if (timer) clearInterval(timer)
  timer = startLogOutTimer();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Date Logic

    
  //const locale = navigator.language;
  //console.log(locale);

  labelDate.textContent = printDate(new Date(),currentAccount.locale);

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  clearInterval(timer)
  timer = startLogOutTimer();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    
    setTimeout(function(){
    // Add movement
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
    },3000)
  }
  inputLoanAmount.value = '';
  clearInterval(timer)
  timer = startLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  clearInterval(timer)
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
// Video 170 - Converting and Checking 4ers
// All numbers are represented as floating point

console.log(23===23.0); //integer the same as float // Numbers are always 64base2 binary

// Base 10 - 0 to 9
// Base 2 - 0&1
console.log(0.1+0.2); // results in infinite fraction from base 2
console.log(0.1+0.2===0.3); // returns false

// Easy convert string to Number
console.log(+'23'); // automatically converts to number

// Parse number from string
console.log(Number.parseInt('30px')); // javascript figures out how to parsse... need to start with num

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23/0)); // infinity is not a NaN


//better than isNaN - to check if value is a number or not
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23/0)); // false


// Math and Rounding
console.log(Math.sqrt(25));
console.log(25**(1/2));
console.log(8**(1/3));

console.log(Math.max(...[1,2,3,4,5,6,'7'])); // can take spread array and does type coercision

console.log(Math.PI); // 3.14
console.log(Math.PI * Number.parseFloat('10px')**2); //pi(r-squared)

// Random number
console.log(Math.trunc(Math.random()*6)+1);

const randomInt = (max,min) => Math.floor(Math.random()*(max-min+1))+min //creates inclusive random num function
console.log(randomInt(7,5));

// Round
console.log(Math.round(23.3));
console.log(Math.round(8.3));
console.log(Math.round(8.5));

// Ceiling
console.log(Math.ceil(23.3));
console.log(Math.ceil(8.3));
console.log(Math.ceil(8.5));

// Floor
console.log(Math.floor(23.3));
console.log(Math.floor(8.3));
console.log(Math.floor(8.5));

// Rounding decimals
console.log((2.7).toFixed(0)); // returns 3 as string?
console.log((2.7).toFixed(3)); // adds zeros until 3 decimal places, so 2.700
console.log(+(2.335).toFixed(2)); //returns 2.33

// Video 172 - The remainder operator 

// The remainder operator
console.log(5%2); // remainder
console.log(5/2);
console.log(8%3);

console.log(6%2); // zero remainder meaning it is even
console.log(7%2); // remainder 1

const isEven = (num) => num%2===0;
console.log(isEven(245678)); 


labelBalance.addEventListener('click',function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(row,i) {
    if (i%2===0) row.style.backgroundColor = 'orangered'
    if (i%3===0) row.style.backgroundColor = 'blue'
  })

})


// Video 173 - Numeric Separators

const diameter = 287_460_000_000; // 287,460,000,000
console.log(diameter); // enginer ignores the numeric separators

const price = 345_99;
console.log(price);

const transferFee1 = 15_00
const transferFee2 = 1_500 // these are the same number to javascript

const PI = 3.14_15 // Not allowed: _3.1415 or 3._1415
console.log(PI);

console.log(Number('230_000')); // Numeric separators should only be written in code... not from API or whatever
// Above is not valid

console.log(Number.parseInt('230_000')); // only returns 230 


// Video 174 - Working with BigInt
console.log(2**53-1); // this is the max safe integer
console.log(Number.MAX_SAFE_INTEGER);
console.log(2**53+1);
console.log(2**53+2);
console.log(2**53+3);
console.log(2**53+4);

// ES2020 brought bigInt
console.log(58734875438726584736287456n); // the n transforms a big number to a huge number
console.log(BigInt(58734875438726584736287456)); // this number is not the same because javascript has to rep the num in parenthesis first

// Operations
console.log(10000n + 10000n);
console.log(100000000000000000000n * 342545242354234n);
//console.log(Math.sqrt(16n)); // this doesn't work


const huge = 314875487325842365874632n;
const num = 17;
console.log(huge * BigInt(num)); // need to convert num 

// Exceptions
console.log(20n > 15);
console.log(20n==='20'); // false
console.log(20n=='20'); // type coercision and it is true

// Division
console.log(10n/3); // results in the closest bigInt



// Video 175 Creating Dates

const d = new Date();
console.log(d); // raw date
console.log(new Date('May 13 2023 07:42:38')); // parsed string
console.log(new Date('Dec 24 2015')); // can be unreliable

console.log(new Date(account1.movementsDates[0])); // UTC = time without timezone or daylight savings

console.log(new Date(2037, 10, 19, 15, 23, 5)); // month is zero based in js
console.log(new Date(2037, 9, 33)); // Oct 33rd

console.log(new Date(0)); // Dec 31 1969

console.log(new Date(3 * 24 * 60 * 60 * 1000)); // convert 3 days to milliseconds
console.log(3 * 24 * 60 * 60 * 1000); // raw timestamp. Are the seconds that past since Dec 31 1969

// working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // don't use getYear
console.log(future.getMonth()); // zero-based
console.log(future.getDate()); // date
console.log(future.getDay()); // day of the week
console.log(future.getHours()); // hours
console.log(future.getMinutes()); // minutes
console.log(future.getSeconds()); // seconds
console.log(future.toISOString()); // Nicely formated date string. follows some kind of international standard
console.log(future.getTime()); // Timestamp


console.log(new Date(2142274980000));

// Current timestamp
console.log(Date.d());

future.setFullYear(2040) // set the date method
console.log(future);

// Video 177 - Operations with dates

// Operations with Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);



const d1 = new Date(2023, 6, 13, 10, 8);
const d2 = new Date(2023, 6, 23, 10, 8);

//console.log(getDaysBetween(d1,d2));

console.log(formatDate(d1));


// Video 179 - Internationalizing Numbers (Intl)

const num = 9345890.54

const options = {
  style: "unit", // percent, currency
  unit: 'mile-per-hour'
}

console.log(new Intl.NumberFormat('en-US',options).format(num)); // United States
console.log(new Intl.NumberFormat('de-DE',options).format(num)); // Germany
console.log(new Intl.NumberFormat('en-SY',options).format(num)); // Syria

console.log(new Intl.NumberFormat(navigator.locale,options).format(num)); // From the browser

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat


// Video 180 - setTimeout and setInterval


// setTimeout - run once
const ingredients = ['chicken','pineapple']
const pizzaTimer = setTimeout((ing1,ing2)=>console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`),3000,...ingredients);
console.log('...waiting');
// Can clear timer
if(ingredients.includes('spinach')) clearTimeout(pizzaTimer) // this will delete timer

// setInterval - keeps running (do once every x time intervals)
setInterval(function(){
  const now = new Date();
  console.log(now);
},11000)
*/

