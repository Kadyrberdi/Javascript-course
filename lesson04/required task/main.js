'use strict';

//подроботка
const income = "freelance";
console.log(typeof income);

//цель
let mission = 1000;
console.log(typeof mission);

//Спрашиваем у пользователя месячный доход
let money = +prompt('Ваш месячный доход?', 50000);
console.log(typeof money);

//Спрашиваем у пользователя на что потрачивает деньги
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пример: "Квартплата, проездной, кредит"');
console.log('Именно за это вы потратили деньги: ' + addExpenses);

//Спрашиваем у пользователя есть ли у него депозить
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('депозит: ' + deposit);

//Спрашиваем у пользователя на что он потратил и сколько потратил
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?', 5000);
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?', 19000);

//Этот Функция должен возвращать сумму всех обязательных расходов за месяц
let getExpensesMonth = function() {
  return amount1 + amount2;
};
getExpensesMonth();
console.log('Расходы за месяц: ' + getExpensesMonth());


//Этот Функция и переменный должен возвращать сумму накоплений за месяц
let getAccumulatedMonth = function() {
  return money - amount1 - amount2;
}

let accumulatedMonth = getAccumulatedMonth();
console.log('суммы накоплений за месяц: ' + accumulatedMonth);


//Этот функция подсчитывает за какой период будет достигнута цель
let getTargetMonth = function() {
  return Math.ceil(mission / accumulatedMonth);
}
console.log('Cрок достижения цели в месяцах: ' + getTargetMonth());


//Вычисляем бюджет пользователя на день, учитывая бюджет на месяц, а не месячный доход
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

// Статус уровень дохода:
let getStatusIncome = function() {
  if (budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';
  } else if ( 600 < budgetDay && budgetDay < 1200) {
    return 'У вас средний уровень дохода';
  } else if (0 < budgetDay && budgetDay <= 600) {
    return 'К сожалению у вас уровень дохода ниже среднего';
  } else {
    return 'Что то пошло не так';
  }
}

console.log('Статус уровень дохода: ' + getStatusIncome());

