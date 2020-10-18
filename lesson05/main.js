'use strict';

// вспомогательная функция
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// переменные

let income = "freelance",  
    mission = 100000,
    period = 5,
    money,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пример: "Квартплата, проездной, кредит"'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    expenses = [],
    expensesAmount,
    accumulatedMonth,
    targetMonth,
    budgetDay;

//функции 

//Спрашиваем у пользователя месячный доход
let start = function() {
  do {
    money = +prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};
start();

//Спрашиваем у пользователя на что он потратил и сколько потратил
let getExpensesMonth = function() {
  let sum = 0;
  let amount = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');
    do {
      amount = +prompt('Во сколько это обойдется?')
      } while (!isNumber(amount));
      
      sum += amount;
  }
  console.log(expenses);
  return sum;
};

expensesAmount = getExpensesMonth();

//Этот Функция и переменный должен возвращать сумму накоплений за месяц
let getAccumulatedMonth = function() {
  return money - expensesAmount;
}

accumulatedMonth = getAccumulatedMonth();

//Этот функция подсчитывает за какой период будет достигнута цель
targetMonth = Math.ceil(mission / accumulatedMonth);

let getTargetMonth = function() {
  if (targetMonth > 0) {
    console.log('Цель будет достигнута');
  } else if (targetMonth <= 0) {
    console.log('Цель не будет достигнута');
  }
};

//Вычисляем бюджет пользователя на день, учитывая бюджет на месяц
budgetDay = Math.floor(accumulatedMonth / 30);

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

// обработчики событий 
//....



//выводы в консоль :
console.log(typeof income);
console.log(typeof mission);
console.log(typeof money);
console.log(typeof period);
console.log(typeof deposit);
console.log(addExpenses.toLowerCase().split(','));
console.log('Ваша зарплата : ' + money);
console.log('Расходы за месяц: ' + expensesAmount);
console.log('суммы накоплений за месяц: ' + accumulatedMonth);
console.log('Цель будет достигнута за ' + targetMonth + ' месяца');
getTargetMonth();
console.log('Бюджет на день: ' + budgetDay);
console.log('Статус уровень дохода: ' + getStatusIncome());



