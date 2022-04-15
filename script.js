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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

containerMovements.innerHTML = '';

const hienThiGiaoDich = function (mov) {
  mov.forEach(function (el, i) {
    const type = el > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value"> ${el}€</div>
  </div>`;
    document.querySelector('.movements').insertAdjacentHTML('afterbegin', html);
  });
};

const tinhTongSoDu = function (arr) {
  const total = arr.reduce(function (total, value) {
    return total + value;
  });

  labelBalance.innerHTML = `${total}€`;
};

const hienSumary = function (mov,laiSuat) {
  const deposit = mov
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item);
  labelSumIn.innerHTML = `${deposit}€`;
  const withdrawal = mov
    .filter(item => item < 0)
    .reduce((acc, item) => acc + item);
  labelSumOut.innerHTML = `${Math.abs(withdrawal)}€`;

  

  const interest = mov
    .filter(item => item > 0)
    .map(item => (item * laiSuat) / 100)
    .filter(item => item > 1)
    .reduce((acc, item) => acc + item);
  labelSumInterest.innerHTML = `${interest}€`;

  console.log(deposit);
};



function taoUserName(i) {
  i.forEach(function (el, index) {
    el.username = el.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
}

taoUserName(accounts);
console.log(accounts);

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  const username = inputLoginUsername.value;
  const pin = inputLoginPin.value;

  const user = accounts.find(acc => acc.username == username);



  if (pin == user.pin) {
    containerApp.style.opacity = 100;

    labelWelcome.textContent = `Welcome ${user.owner.split(' ')[0]}`;

    hienSumary(user.movements,user.interestRate);
    hienThiGiaoDich(user.movements);
    tinhTongSoDu(user.movements);

  
    btnTransfer.addEventListener('click',function(){
      let accountsReceive=inputTransferTo;
      let amount=inputTransferAmount;





    })
  


  }

  console.log(user);
});

// let currentAccount;
// btnLogin.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);})

// function checkDogs(dogsJulia, dogsKate) {
//   dogsJulia.pop();
//   dogsJulia.shift();
//   // const dogsJuliaCP=[...dogsJulia].pop();

//   const dogs = [...dogsJulia, ...dogsKate];
//   dogs.forEach(function (el, i) {
//     const mess =
//       el >= 3
//         ? `Dog number ${i + 1} is an adult, and is ${el} years old`
//         : `Dog number ${i + 1} is still a puppy`;

//     console.log(mess);
//   });

//   // console.log(dogsJulia);
//   // console.log(dogs);
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// function calcAverageHumanAge(arr){

//   const hmagae= arr.map(function(item){
//     if (item<=2){ return item *=2}
//     else { return item=16+item*4}
//   })

//   const hmagaetren18= hmagae.filter(function(item){

//     return (item>=18)

//   })

//   const averhage= hmagaetren18.reduce(function(total,item){
//     return(total+item)/hmagaetren18.length
//   })

// return averhage
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
