'use strict';

// вспомогательная функция
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// переменные
let appData = {
  income: {},
  addIncome: [],
  expenses: [],
  addExpenses: [],
  deposit: false,
  mission: 60000,
  period: 5,
  expensesAmount: {},
  accumulatedMonth: [],
  targetMonth: [],
  budgetDay: [],
  asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пример: "Квартплата, проездной, кредит"');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  }
};


let money;

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
    appData.expenses[i] = prompt('Введите обязательную статью расходов?');
    do {
      amount = +prompt('Во сколько это обойдется?')
      } while (!isNumber(amount));
      
      sum += amount;
  }
  console.log(appData.expenses);
  return sum;
};

appData.expensesAmount = getExpensesMonth();

//Этот Функция и переменный должен возвращать сумму накоплений за месяц
let getAccumulatedMonth = function() {
  return money - appData.expensesAmount;
}

appData.accumulatedMonth = getAccumulatedMonth();

//Этот функция подсчитывает за какой период будет достигнута цель
appData.targetMonth = Math.ceil(appData.mission / appData.accumulatedMonth);

let getTargetMonth = function() {
  if (appData.targetMonth > 0) {
    console.log('Цель будет достигнута');
  } else if (appData.targetMonth <= 0) {
    console.log('Цель не будет достигнута');
  }
};

//Вычисляем бюджет пользователя на день, учитывая бюджет на месяц
appData.budgetDay = Math.floor(appData.accumulatedMonth / 30);

// Статус уровень дохода:
let getStatusIncome = function() {
  if (appData.budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';
  } else if ( 600 < appData.budgetDay && appData.budgetDay < 1200) {
    return 'У вас средний уровень дохода';
  } else if (0 < appData.budgetDay && appData.budgetDay <= 600) {
    return 'К сожалению у вас уровень дохода ниже среднего';
  } else {
    return 'Что то пошло не так';
  }
}

// обработчики событий 
//....



//выводы в консоль :
console.log(typeof appData.income);
console.log(typeof appData.mission);
console.log(typeof money);
console.log(typeof appData.period);
console.log(typeof appData.deposit);
console.log('Ваша зарплата : ' + money);
console.log('Расходы за месяц: ' + appData.expensesAmount);
console.log('суммы накоплений за месяц: ' + appData.accumulatedMonth);
getTargetMonth();
console.log('Цель будет достигнута за ' + appData.targetMonth + ' месяца');
console.log('Бюджет на день: ' + appData.budgetDay);
console.log('Статус уровень дохода: ' + getStatusIncome());



