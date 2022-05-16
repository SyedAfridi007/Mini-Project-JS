"use strict";
// Data
const accounts = [
  {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
    movementsDates: [
      "2022-05-01T21:31:17.178Z",
      "2022-05-03T07:42:02.383Z",
      "2022-05-06T09:15:04.904Z",
      "2022-05-08T10:17:24.185Z",
      "2022-05-08T14:11:59.604Z",
      "2022-05-10T17:01:17.194Z",
      "2022-05-14T23:36:17.929Z",
      "2022-05-15T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT",
  },

  {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
      "2019-11-01T13:15:33.035Z",
      "2019-11-30T09:48:16.867Z",
      "2019-12-25T06:04:23.907Z",
      "2020-01-25T14:18:46.235Z",
      "2020-02-05T16:33:06.386Z",
      "2020-04-10T14:43:26.374Z",
      "2020-06-25T18:49:59.371Z",
      "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
  },

  {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
      "2019-11-18T21:31:17.178Z",
      "2019-12-23T07:42:02.383Z",
      "2020-01-28T09:15:04.904Z",
      "2020-04-01T10:17:24.185Z",
      "2020-05-08T14:11:59.604Z",
      "2020-07-26T17:01:17.194Z",
      "2020-07-28T23:36:17.929Z",
      "2020-08-01T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT",
  },

  {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    movementsDates: [
      "2019-11-01T13:15:33.035Z",
      "2019-11-30T09:48:16.867Z",
      "2019-12-25T06:04:23.907Z",
      "2020-01-25T14:18:46.235Z",
      "2020-02-05T16:33:06.386Z",
      "2020-04-10T14:43:26.374Z",
      "2020-06-25T18:49:59.371Z",
      "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
  },
];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//Create Username

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

const formatMovementDate = function (date) {
  const calcDatePassed = function (date1, date2) {
    return Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  };
  const datePassed = calcDatePassed(new Date(), date);
  if (datePassed === 0) return "Today";
  if (datePassed === 1) return "Yesterday";
  if (datePassed <= 7) return `${datePassed} Days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};

const formateCurrencyLocale = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const startLogoutTimer = function () {
  let time = 300;

  const timerStart = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  timerStart();
  const timer = setInterval(timerStart, 1000);
  return timer;
};
createUsername(accounts);

let currentAccount, timer;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    const currentDate = new Date();
    const day = `${currentDate.getDate()}`.padStart(2, 0);
    const month = `${currentDate.getMonth() + 1}`.padStart(2, 0);
    const year = currentDate.getFullYear();
    const hour = `${currentDate.getHours()}`.padStart(2, 0);
    const min = `${currentDate.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    inputLoginUsername.value = inputLoginPin.value = "";

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    updateUI(currentAccount);
  }
});

//Display Movements
const displayMovements = function (accs, sort = false) {
  containerMovements.innerHTML = "";

  const movSort = sort
    ? accs.movements.slice().sort((a, b) => a - b)
    : accs.movements;

  movSort.forEach((acc, i) => {
    const transactionType = acc > 0 ? "deposit" : "withdrawal";
    const date = new Date(accs.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const formateMovCurrencyLocale = formateCurrencyLocale(
      acc,
      accs.locale,
      accs.currency
    );

    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${transactionType}">${
      i + 1
    } ${transactionType} </div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formateMovCurrencyLocale}</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//Calculate Balance
const calculateBalance = function (accs) {
  accs.totalBalance = accs.movements.reduce(
    (accumulator, mov) => accumulator + mov,
    0
  );
  const formateMovCurrencyLocale = formateCurrencyLocale(
    accs.totalBalance,
    accs.locale,
    accs.currency
  );
  labelBalance.textContent = formateMovCurrencyLocale;
};

//Calculate In Out Balance

const calculateInOutBalance = function (accs) {
  const inBalance = accs.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = formateCurrencyLocale(
    inBalance,
    accs.locale,
    accs.currency
  );

  const outBalance = accs.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = formateCurrencyLocale(
    Math.abs(outBalance),
    accs.locale,
    accs.currency
  );

  const InterestBalance = accs.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * accs.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = formateCurrencyLocale(
    InterestBalance,
    accs.locale,
    accs.currency
  );
};

//Sorted Movements
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

//Transfer Balance
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (amount > 0 && receiverAccount && currentAccount.totalBalance > amount) {
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    receiverAccount.movements.push(amount);
    receiverAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = "";
  clearInterval(timer)
  timer = startLogoutTimer();
});
//Loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= (amount * 10) / 100)
  ) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 5000);
  }
  
  clearInterval(timer)
  timer = startLogoutTimer();
  inputLoanAmount.value = "";
});
//Delete Account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

const updateUI = function (acc) {
  displayMovements(acc);
  calculateBalance(acc);
  calculateInOutBalance(acc);
};
