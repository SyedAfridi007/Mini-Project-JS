let exchangePercent = 0.01;

let count = 0;
let table = document.querySelector("table");
let sellCurrency = document.querySelector(".sellSelect");
let buyAmount = document.querySelector(".buyAmount");
let buyCurrency = document.querySelector(".buySelect");

let purchaseBtn = document.querySelector(".purchaseBtn");
let checkBtn = document.querySelector(".checkBtn");
let currencyAddBtn = document.querySelector(".currencyAddBtn");

let tableData = document.querySelector(".tableData");

let countryInput = document.querySelector(".coninput");
let currencyInput = document.querySelector(".curinput");
let buyInput = document.querySelector(".binput");
let sellInput = document.querySelector(".sinput");

let operationForm = document.querySelector(".operationForm");
let amount = document.querySelector(".amount");

let countrySelect = document.querySelector("#country");
let buySelect = document.querySelector("#buySelect");
let sellSelect = document.querySelector("#sellSelect");

let currencyDisplay = document.querySelector(".currencyDisplay");
let exchangeCurrency = document.querySelector(".exchangeCurrency");
let updateCurrency = document.querySelector(".updateCurrency");

let exBtn = document
  .querySelector(".exBtn")
  .addEventListener("click", function () {
    exchangeCurrency.style.display = "block";
    updateCurrency.style.display = "none";
  });
let upBtn = document
  .querySelector(".upBtn")
  .addEventListener("click", function () {
    exchangeCurrency.style.display = "none";
    updateCurrency.style.display = "block";
  });

let currencyExchange = [
  {
    countryName: "bangladesh",
    currencyName: "taka",
    buyExchangeRate: 0.012, //1taka = 0.012usd
    sellExchangeRate: 86.8, //1usd = 86.80taka
  },
  {
    countryName: "usa",
    currencyName: "usd",
    buyExchangeRate: 1,
    sellExchangeRate: 1,
  },
  {
    countryName: "europe",
    currencyName: "eur",
    buyExchangeRate: 1.06,
    sellExchangeRate: 0.95, //eur
  },
  {
    countryName: "china",
    currencyName: "yuan",
    buyExchangeRate: 0.15, //1yuan = 0.15 usd
    sellExchangeRate: 6.73, //1usd =6.73yuan
  },
];

let restCurrency = "";
let userCountryCurrency = " ";
checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  currencyDisplay.style.display = "block";
  display(currencyExchange);
});

let display = function (country) {
  userCountryCurrency = country.find(
    (mov) => mov.currencyName.toLowerCase() == countrySelect.value.toLowerCase()
  );
  let html = `<tr>
  <th>Country</th>
  <th>Currency Name</th>
  <th>Buy Exchange Rate</th>
  <th>Sell Exchange Rate</th>
  </tr>`;

  let coName = "";
  let cuName = "";
  let cBER = "";
  let cSER = " ";

  restCurrency = country
    .filter(
      (mov) =>
        mov.currencyName.toLowerCase() != countrySelect.value.toLowerCase()
    )

    .forEach((mov) => {
      coName = mov.countryName;
      cuName = mov.currencyName;
      cBER = mov.buyExchangeRate * userCountryCurrency.sellExchangeRate;
      cSER = cBER + cBER * exchangePercent;

      html += `
      <tr>
      <td>${coName}</td>
      <td>${cuName}</td>
      <td>${cBER.toFixed(2)} ${userCountryCurrency.currencyName}</td>
      <td>${cSER.toFixed(2)} ${userCountryCurrency.currencyName}</td>
      </tr>`;
    });

  tableData.innerHTML = html;
  table.style.display = "flex";
};

currencyAddBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let newCountry = countryInput.value.trim().toUpperCase();
  let newCurrency = currencyInput.value.trim().toUpperCase();
  let newCurrencyBuyPrice = Number(buyInput.value);
  let newCurrencySellPrice = Number(sellInput.value);

  currencyExchange.push({
    countryName: newCountry.trim().toLowerCase(),
    currencyName: newCurrency.trim().toLowerCase(),
    buyExchangeRate: newCurrencyBuyPrice,
    sellExchangeRate: newCurrencySellPrice,
  });

  let countryOption = document.createElement("option");
  countryOption.innerText = newCountry;
  countryOption.value = newCurrency.trim().toLowerCase();
  countrySelect.appendChild(countryOption);

  let buyOption = document.createElement("option");
  buyOption.innerText = newCurrency;
  buyOption.value = newCurrency.trim().toLowerCase();
  buySelect.appendChild(buyOption);

  let sellOption = document.createElement("option");
  sellOption.innerText = newCurrency;
  sellOption.value = newCurrency.trim().toLowerCase();
  sellSelect.appendChild(sellOption);

  display(currencyExchange);

  newCountry.value = " ";
  newCurrency.value = " ";
  buyInput.value = " ";
  sellInput.value = " ";
});

let buyCurAmount = "";
let sellCurAmount = "";

purchaseBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let purchaseAmount = Number(buyAmount.value);
  let buyCurrency = buySelect.value.toLowerCase();
  let sellCurrency = sellSelect.value.toLowerCase();

  currencyExchange.forEach((mov) => {
    if (buyCurrency == mov.currencyName) {
      buyCurAmount = mov.buyExchangeRate;
    }

    if (sellCurrency == mov.currencyName) {
      sellCurAmount = mov.sellExchangeRate + mov.sellExchangeRate * exchangePercent;
    }
  });

  let amount = buyCurAmount * buyAmount.value;
  console.log(amount);
  let totalAmount = (amount * sellCurAmount).toFixed(2);
  console.log(totalAmount);

  confirm(
    `You Purchase ${purchaseAmount + buyCurrency.toUpperCase()} with Exchange ${
      totalAmount + sellCurrency.toUpperCase()
    }`
  );
});
