'use strict';

let mission = 1000;
console.log(typeof mission);

//Спрашиваем у пользователя месячный доход
let money = +prompt('Ваш месячный доход?');
console.log(typeof money);


//Спрашиваем у пользователя на что потрачивает деньги
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пример: "Квартплата, проездной, кредит"');
console.log('Именно за это вы потратили деньги: ' + addExpenses);

//Спрашиваем у пользователя на что он потратил и сколько потратил
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?', 500);
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?', 100);

//Этот Функция должен возвращать сумму всех обязательных расходов за месяц
getExpensesMonth() {
  return amount1 + amount2;
}
console.log('getExpensesMonth(): ', getExpensesMonth());

//Этот Функция и переменный должен возвращать сумму накоплений за месяц
getAccumulatedMonth() {
  return money - amount1 - amount2;
}

let accumulatedMonth = getAccumulatedMonth();

//Этот функция подсчитывает за какой период будет достигнута цель
getTargetMonth() {
  return mission / accumulatedMonth;
}

//Вычисляем бюджет пользователя на день, учитывая бюджет на месяц, а не месячный доход
let budgetDay = Math.floor(accumulatedMonth / 30);
