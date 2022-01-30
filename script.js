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


const displayMovements = function(movements){
  containerMovements.innerHTML = "";
  movements.forEach(function(mov, i){

    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  })
}

displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES






////////////////////////////////////////////////

//let arr = ["a", "b", "c", "d", "e"];



/*
//Array Slice Method : Can extract part from any given array without changing orignal array.

console.log(arr.slice(2));
//(3) ['c', 'd', 'e']
//(starting parameter)Extracts element fromt the index given.
console.log(arr.slice(2, 4));
//(2) ['c', 'd']
//(starting param, ending param) Extracts elements starting from 2 and Ending(4) => (4-1) = 3.
console.log(arr.slice(-2));
//(2) ['d', 'e']
//(Negative Starting Index-- Meaning: Slices last two elements from the array)
console.log(arr.slice(-1));
//['e']
//(Negative starting Index-- Meaning: Slices last one element from the array)
console.log(arr.slice(1, -2)); 
//(2) ['b', 'c']
//(Starting Index, Negative Ending Index) Meaning: Starts slicing from 1 and till -2 
console.log(arr.slice());
//(5) ['a', 'b', 'c', 'd', 'e']
//Leaving param for slice empty, gives us whole arr. 
console.log([...arr]);
//(5) ['a', 'b', 'c', 'd', 'e']
//Same thing using spread Operator
//Advantage of using slice is we can chaing multiple methods.
*/
/*
//Array Splice : Extracts part of the array, but changes the orignal array.

console.log(arr.splice(2));
//(3) ['c', 'd', 'e'] Removed Elements
//(Delete Count param)Meaning: Starts for index 2 and removes them from the array
console.log(arr);
//(2) ['a', 'b'] Reaining Elements
console.log(arr.splice(-1));
//['b'] As the orignal array had only this
//(Negative Delete Count) Meaning: Removes element from the right side of the array.
console.log(arr.splice(1, 2));
//(2) ['b', 'c']
//(Start, Delete Count) Where start works same as the Slice -> Start parameter,
//But the (Delete Count Delete (No. of element to delete))
// Keeping Orignal array here as : ["a", "b", "c", "d", "e"];
// Starts from index 1(b), deletes(2) -> (2(b = 0, c = 1, d = 2) Now, 2-1 = C). Till d elements will be removed.
//Orignal array now:
console.log(arr);
//(3) ['a', 'd', 'e']
*/

/*
//Array Reverse : Mutates the orignal array by reversing it from left to right to right to left

const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
//(5) ['f', 'g', 'h', 'i', 'j']
console.log(arr2);
//(5) ['f', 'g', 'h', 'i', 'j']
// Reverses the Array
*/

/*
//Array Concat : Adds two Arrays , doesn't mutate array

const letters = arr.concat(arr2); //Arr on which concat method is being set. and concat(arr2) is from which the element is being added.
console.log(letters);
//(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const arr2 = ["j", "i", "h", "g", "f"];
//Could have done samething using spread operator
console.log(...arr, ...arr2); // if we want it in array we do like console.log([...arr, ...arr2])
*/

/*
//Array Join : Joins each element in the array with param provided.

console.log(arr.join("-"));
//a-b-c-d-e
console.log(arr.join(" "));
//a b c d e
*/

/*

//For Each Loop : One thing to notice is that continue||break are not available in this,
//meaning we can't get out of loop until it's finished iterating array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//Positive values are credits and Negative are Withdrawls
// /* This is with using for-of loop

// for(const movement of movements) {
//   if(movement > 0) {
//     console.log(`You deposited ${movement}`);
//   }
//   else {
//     console.log(`You withdrew ${Math.abs(movement)}`); //abs removes negative
//   }
// };

//In case index is necessary we would do

for(const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement-${i+ 1} : You deposited ${movement}`);
  }
  else {
    console.log(`Movement-${i + 1} : You withdrew ${Math.abs(movement)}`); //abs removes negative
  }
};

/* This is with using for-Each loop

movements.forEach(function(movement){
  //forEach takes a call back function and that makes  itself as higher order function
  //forEach method will call this function itself on each iteration.
  //That function has parameter movement(iterable) .. same we made in for of loop like - for(iteration) of (array)
  let count = 0
  if(movement > 0) {
    console.log(`You deposited ${movement}`);
  }
  else {
    console.log(`You withdrew ${Math.abs(movement)}`); //abs removes negative
  }
})

// 0: func(200)
//1:func(450)
// .
// .
// .
//(arr.length) ; func(1300)

//To achieve index number in forEach aswell, we have to give it 3 param in order(mov,i, arr)
//mov stands for the iterable, i stands for index, and arr stands for the array. 


movements.forEach(function(mov, i, arr){
  if(mov > 0) {
    console.log(`Movement-${i+ 1} : You deposited ${mov}`);
  }
  else {
    console.log(`Movement-${i + 1} : You withdrew ${Math.abs(mov)}`);
  }
})

*/

/*
//forEach on Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//Map : In case of map we have Key which gives us the value.
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})

//Set : In case of set we don't have key. So we won't get the value we provide to key.
// So why do we have key as arguments.. it was decided not to remove it. and we can't have 2 param. of same name
//for ex. function(value, value, arr).. To make it work we do:
//USE ( _ ) underscore which is also called as a "THROWABLE Variable"
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

// currenciesUnique.forEach(function(value, key, arr){
currenciesUnique.forEach(function(value, _ , arr){
  console.log(` Key of ${ _ } : is  ${value}`);
}) 

// Key of USD : is  USD
// script.js:242  Key of GBP : is  GBP
// script.js:242  Key of EUR : is  EUR

*/ 

//Bankist App

/*
// Creating DOM Elements

const displayMovements = function(movements){
  containerMovements.innerHTML = "";
  movements.forEach(function(mov, i){

    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  })
}

displayMovements(account1.movements);
*/

