


//import view
$(document).ready(function() {
  if (localStorage.getItem("currencyData") !== null) {
      storedUsers = JSON.parse(localStorage.getItem("currencyData"));
  
      if (localStorage.getItem("currencyData").length !== 2) {
          $('table').append('<tr><th>ID</th><th> Currency Name </th><th> Buy Price </th><th> Sell Price </th></tr>');
      }

      for(i=0; i<storedUsers.length; i++){
          var id = i+1;
          $('table').append('<tr><td>' + id + '</td><td>' + storedUsers[i]['currencyName'] + '</td><td>' + storedUsers[i]['buyPrice'] + '</td><td>' + storedUsers[i]['sellPrice'] + '</td></tr>');		
      }
  }
});

//user operation

const form = document.querySelector('form')

const amount = form.querySelector('#amount');
const buy = form.querySelector('#buy');
const sell = form.querySelector('#sell');
const nam = form.querySelector('#name');
const email = form.querySelector('#email');
const passport = form.querySelector('#passport');
const accno = form.querySelector('#accno');
const password = form.querySelector('#password');
const convert = form.querySelector('.convert')
var total_amount= 0;
var buy_amount= 0;
var date = new Date();
console.log(date);
var cday = date.getDate();
var cmounth = date.getMonth();
var cyear = date.getFullYear();
var chour = date.getHours();
var cminite = date.getMinutes();
var csecound = date.getSeconds();

//console.log('Purchase Date:' + cday + ':' + cmounth + ':' + cyear + ' Time:' + chour + ':' + cminite + ':' + csecound );



form.addEventListener('submit',formHandler)
var text = document.querySelectorAll('p')

function formHandler(e){
    e.preventDefault();
    popup.classList.add('active');
    details.classList.add('active')
    popup.style.display= "block";

    if(buy.value == '0' && sell.value == '0' || buy.value == sell.value){
      popup.classList.remove('active');
      details.classList.remove('active');
    }

    //USD
    else if (buy.value == 'usd' && sell.value == 'taka'){
      total_amount= (amount.value * storedUsers[0]['buyPrice']).toFixed(2);
      //console.log(total_amount);
    }
    else if (buy.value == 'usd' && sell.value == 'pound'){
      buy_amount= (amount.value * storedUsers[0]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[1]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'usd' && sell.value == 'euro'){
      buy_amount= (amount.value * storedUsers[0]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[2]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'usd' && sell.value == 'yuan'){
      buy_amount= (amount.value * storedUsers[0]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[3]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'usd' && sell.value == 'riyal'){
      buy_amount= (amount.value * storedUsers[0]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[4]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'usd' && sell.value == 'dinar'){
      buy_amount= (amount.value * storedUsers[0]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[5]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'usd' && sell.value == 'rupee'){
      buy_amount= (amount.value * storedUsers[0]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[6]['sellPrice']).toFixed(2);
    }

    //POUND
    else if (buy.value == 'pound' && sell.value == 'taka'){
      total_amount= (amount.value * storedUsers[1]['buyPrice']).toFixed(2);
      //console.log(total_amount);
    }
    else if (buy.value == 'pound' && sell.value == 'usd'){
      buy_amount= (amount.value * storedUsers[1]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[0]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'pound' && sell.value == 'euro'){
      buy_amount= (amount.value * storedUsers[1]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[2]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'pound' && sell.value == 'yuan'){
      buy_amount= (amount.value * storedUsers[1]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[3]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'pound' && sell.value == 'riyal'){
      buy_amount= (amount.value * storedUsers[1]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[4]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'pound' && sell.value == 'dinar'){
      buy_amount= (amount.value * storedUsers[1]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[5]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'pound' && sell.value == 'rupee'){
      buy_amount= (amount.value * storedUsers[1]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[6]['sellPrice']).toFixed(2);
    }

    //Euro
    else if (buy.value == 'euro' && sell.value == 'taka'){
      total_amount= (amount.value * storedUsers[2]['buyPrice']).toFixed(2);
      //console.log(total_amount);
    }
    else if (buy.value == 'euro' && sell.value == 'usd'){
      buy_amount= (amount.value * storedUsers[2]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[0]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'euro' && sell.value == 'pound'){
      buy_amount= (amount.value * storedUsers[2]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[1]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'euro' && sell.value == 'yuan'){
      buy_amount= (amount.value * storedUsers[2]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[3]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'euro' && sell.value == 'riyal'){
      buy_amount= (amount.value * storedUsers[2]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[4]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'euro' && sell.value == 'dinar'){
      buy_amount= (amount.value * storedUsers[2]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[5]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'euro' && sell.value == 'rupee'){
      buy_amount= (amount.value * storedUsers[2]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[6]['sellPrice']).toFixed(2);
    }

    //Yuan
    else if (buy.value == 'yuan' && sell.value == 'taka'){
      total_amount= (amount.value * storedUsers[2]['buyPrice']).toFixed(2);
      //console.log(total_amount);
    }
    else if (buy.value == 'yuan' && sell.value == 'usd'){
      buy_amount= (amount.value * storedUsers[3]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[0]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'yuan' && sell.value == 'pound'){
      buy_amount= (amount.value * storedUsers[3]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[1]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'yuan' && sell.value == 'euro'){
      buy_amount= (amount.value * storedUsers[3]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[2]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'yuan' && sell.value == 'riyal'){
      buy_amount= (amount.value * storedUsers[3]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[4]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'yuan' && sell.value == 'dinar'){
      buy_amount= (amount.value * storedUsers[3]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[5]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'yuan' && sell.value == 'rupee'){
      buy_amount= (amount.value * storedUsers[3]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[6]['sellPrice']).toFixed(2);
    }

    //Riyal
    else if (buy.value == 'riyal' && sell.value == 'taka'){
      total_amount= (amount.value * storedUsers[4]['buyPrice']).toFixed(2);
      //console.log(total_amount);
    }
    else if (buy.value == 'riyal' && sell.value == 'usd'){
      buy_amount= (amount.value * storedUsers[4]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[0]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'riyal' && sell.value == 'pound'){
      buy_amount= (amount.value * storedUsers[4]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[1]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'riyal' && sell.value == 'euro'){
      buy_amount= (amount.value * storedUsers[4]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[2]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'riyal' && sell.value == 'yuan'){
      buy_amount= (amount.value * storedUsers[4]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[3]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'riyal' && sell.value == 'dinar'){
      buy_amount= (amount.value * storedUsers[4]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[5]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'riyal' && sell.value == 'rupee'){
      buy_amount= (amount.value * storedUsers[4]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[6]['sellPrice']).toFixed(2);
    }

    //Dinar
    else if (buy.value == 'dinar' && sell.value == 'taka'){
      total_amount= (amount.value * storedUsers[5]['buyPrice']).toFixed(2);
      //console.log(total_amount);
    }
    else if (buy.value == 'dinar' && sell.value == 'usd'){
      buy_amount= (amount.value * storedUsers[5]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[0]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'dinar' && sell.value == 'pound'){
      buy_amount= (amount.value * storedUsers[5]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[1]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'dinar' && sell.value == 'euro'){
      buy_amount= (amount.value * storedUsers[5]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[2]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'dinar' && sell.value == 'yuan'){
      buy_amount= (amount.value * storedUsers[5]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[3]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'dinar' && sell.value == 'riyal'){
      buy_amount= (amount.value * storedUsers[5]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[4]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'dinar' && sell.value == 'rupee'){
      buy_amount= (amount.value * storedUsers[4]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[6]['sellPrice']).toFixed(2);
    }

    //Rupee
    else if (buy.value == 'rupee' && sell.value == 'taka'){
      total_amount= (amount.value * storedUsers[6]['buyPrice']).toFixed(2);
      //console.log(total_amount);
    }
    else if (buy.value == 'rupee' && sell.value == 'usd'){
      buy_amount= (amount.value * storedUsers[6]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[0]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'rupee' && sell.value == 'pound'){
      buy_amount= (amount.value * storedUsers[6]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[1]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'rupee' && sell.value == 'euro'){
      buy_amount= (amount.value * storedUsers[6]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[2]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'rupee' && sell.value == 'yuan'){
      buy_amount= (amount.value * storedUsers[6]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[3]['sellPrice']).toFixed(2);
    }
    else if (buy.value == 'rupee' && sell.value == 'riyal'){
      buy_amount= (amount.value * storedUsers[6]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[4]['sellPrice']).toFixed(2);
    }
    else if(buy.value == 'rupee' && sell.value == 'dinar'){
      buy_amount= (amount.value * storedUsers[4]['buyPrice'])
      total_amount=(buy_amount/ storedUsers[5]['sellPrice']).toFixed(2);
    }


    text[0].innerText = "Name: " + nam.value; 
    text[1].innerText = "Purchase Amount: " + amount.value +" "+buy.value;
    text[2].innerText = "Sell Amount: " + total_amount +" "+sell.value;
    text[3].innerText = "Account Number: " + accno.value;
    text[4].innerText = "Purchase Date: " + cday + ':' + cmounth + ':' + cyear + ' Time:' + chour + ':' + cminite + ':' + csecound ;



    amount.value = "";
    buy.value = "";
    sell.value = "";
    name.value = "";
    email.value = "";
    passport.value = "";
    accno.value = "";
    password.value = "";
}



var opbtn = document.querySelector('.btn');
var popup = document.querySelector('.popup');
var details = document.querySelector('.details');
var clsbtn = document.querySelector('.cls-btn');


clsbtn.addEventListener('click', function(){
    popup.classList.remove('active');
    details.classList.remove('active');
    popup.style.display= "none";
 })
 























 

