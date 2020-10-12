'use strict';
let money = 200;
const income = "freelance";
const addExpenses =
  "Квартплата, коммуналка, интернет, продукты, развлечение, еда вне дома, шоппинг";
const deposit = false;
const mission = 1000;
const period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев" );
console.log('Цель заработать ' + mission + " долларов");
console.log(addExpenses.toLowerCase().split('').join(''));

const budgetDay = money / 30;
console.log(budgetDay);


money = confirm(“Ваш месячный доход?”);
