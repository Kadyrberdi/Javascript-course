'use strict';
const income = "freelance";
let addExpenses =
  "Квартплата, коммуналка, интернет, продукты, развлечение, еда вне дома, шоппинг";
let deposit = false;
let mission = 1000;
let period = 5;

console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев" );
console.log('Цель заработать ' + mission + " долларов");
console.log(addExpenses.toLowerCase().split('').join(''));

//Отсюда начинается 3-ый урок
//Спрашиваем у пользователя месячный доход
let money = +prompt('Ваш месячный доход?');
console.log('Ваша зарплата: ' + money);

//Спрашиваем у пользователя на что потрачивает деньги
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пример: "Квартплата, проездной, кредит"');
console.log('Именно за это вы потратили деньги: ' + addExpenses);

//Спрашиваем у пользователя есть ли у него депозить
deposit = confirm('Есть ли у вас депозит в банке?');
console.log('депозит: ' + deposit);

//Спрашиваем у пользователя на что он потратил и сколько потратил
let expenses1 = prompt('Введите обязательную статью расходов?');
console.log('расход 1: ' + expenses1);
let amount1 = prompt('Во сколько это обойдется?');
console.log('цена расхода 1: ' + amount1);
let expenses2 = prompt('Введите обязательную статью расходов?');
console.log('расход 2: ' + expenses2);
let amount2 = prompt('Во сколько это обойдется?');
console.log('цена расхода 2: ' + amount2);

//Вычисляем бюджет пользователя на месяц, учитывая его/её расходы
let budgetMonth = Math.ceil(money - amount1 - amount2);
console.log('Бютджет на месяц: ' + budgetMonth);

//Посчитаем за сколько месяцев будет достигнута цель пользователя
let countMission = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнуто за: ' + countMission + ' месяцев');

//Вычисляем бюджет пользователя на день, учитывая бюджет на месяц, а не месячный доход
let budgetDay = Math.floor(budgetMonth / 30);
console.log('Бютджет на день: ' + budgetDay);

// Статус уровень дохода:
if (budgetMonth >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if ( 600 < budgetMonth && budgetMonth < 1200) {
  console.log('У вас средний уровень дохода');
} else if (0 < budgetMonth && budgetMonth <= 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}