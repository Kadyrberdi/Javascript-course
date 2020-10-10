let money = 200;
let income = "freelance";
let addExpenses =
  "Квартплата, коммуналка, интернет, продукты, развлечение, еда вне дома, шоппинг";
let deposit = false;
let mission = 1000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев" );
console.log('Цель заработать ' + mission + " долларов");
console.log(addExpenses.toLowerCase().split('').join(''));

let budgetDay = money / 30;
console.log(budgetDay);