const budget = Object.freeze([ // not a deep freeze
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// budget[0].value = 100000 // this change can be done
// console.log(budget)
// budget[9] = 'aaron' // this change cannot be done
// console.log(budget) // no change

const spendingLimits = Object.freeze({ // object.freeze makes object immutable
  jonas: 1500,
  matilda: 100,
});

spendingLimits.jay = 200;
console.log(spendingLimits) // frozen and does not change

const getLimit = (limits,user) => limits?.[user] ?? 0;


// Now this is a pure function @ vid 283
const addExpense = function (state, limits, value, description, user='jonas') {
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // let lim; // not descriptive name
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0; // alternative 1

 // alternative 2 
  return (value <= getLimit(limits,cleanUser)) ?   
     [...state,{ value: -value, description, user:cleanUser }] : state;
    
  

};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

console.log(newBudget1);

// const checkExpenses = function (state,limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits,entry.user) ? {...entry,flag:'limit'}: entry;
//   })
//   // for (const entry of newBudget3)
//     // let lim;
//     // if (spendingLimits[entry.user]) {
//     //   lim = spendingLimits[entry.user];
//     // } else {
//     //   lim = 0;
//     // }

//     // if (entry.value < -getLimit(limits,entry.user))
//     //   entry.flag = 'limit';

// };

const checkExpenses2 = (state,limits) => state.map(entry => entry.value < -getLimit(limits,entry.user) ? {...entry,flag:'limit'}: entry);

checkExpenses2(newBudget3, spendingLimits);


const logBigExpenses = function (state,bigLimit) {
  // let output = '';
  // for (const entry of state) 
  //    output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / `: '';  // Emojis are 2 chars
  

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);

  // functional version of the above
  const bigExpenses = state.filter(entry => entry.value <= -bigLimit)
  .map(entry=>entry.description.slice(-2))
  .join('/');
  // .reduce((str,cur) => `${str} / ${cur.description.slice(-2)}`, '')
  console.log(bigExpenses.slice(2));
};

console.log(budget);
logBigExpenses(budget,1000);
