let money = 200;
let income = 100;
let addExpenses =
  "Квартплата, коммуналка, интернет, продукты, развлечение, еда вне дома, шоппинг";
let deposit = false;
let mission = 1000;
let period = 12;

console.log(money);
console.log(income);
console.log(deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев" );
console.log('Цель заработать ' + mission + " долларов");
console.log(addExpenses.toLowerCase().split('').join(''));

let budgetDay =  (money + income) / 30;
console.log(budgetDay);