'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

//подроботка
const income = "freelance";
console.log(typeof income);

//цель
let mission = 100000;
console.log(typeof mission);


//Спрашиваем у пользователя на что потрачивает деньги
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пример: "Квартплата, проездной, кредит"');
console.log('Именно за это вы потратили деньги: ' + addExpenses.toLowerCase().split(','));

//Спрашиваем у пользователя месячный доход
let money;

let start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
  return money;
};
start();
console.log('Ваш месячный доход: ', money);
console.log(typeof money);


//Спрашиваем у пользователя есть ли у него депозить
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('депозит: ' + deposit);

//Спрашиваем у пользователя на что он потратил и сколько потратил
//let expenses1, expenses2;
let expenses = [];

//Этот Функция должен возвращать сумму всех обязательных расходов за месяц
let getExpensesMonth = function() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');

    sum += +prompt('Во сколько это обойдется?');

  }
  console.log('обязательные статьи расходов: ', expenses);
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);
console.log(typeof expensesAmount);


//Этот Функция и переменный должен возвращать сумму накоплений за месяц
let getAccumulatedMonth = function() {
  return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth();
console.log('суммы накоплений за месяц: ' + accumulatedMonth);


//Этот функция подсчитывает за какой период будет достигнута цель
let targetMonth = Math.ceil(mission / accumulatedMonth);

let getTargetMonth = function() {
  if (targetMonth > 0) {
    console.log('Цель будет достигнута');
  } else if (targetMonth <= 0) {
    console.log('Цель не будет достигнута');
  }
};
//getTargetMonth();
console.log('Цель будет достигнута за ' + targetMonth + ' месяца');



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

