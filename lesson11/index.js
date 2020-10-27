'use strict';

//data
let salary = document.querySelector('.salary-amount'),
income = document.querySelector('.income-title'),
incomeAmount = document.querySelector('.income-amount'),
additionalIncome = document.querySelectorAll('.additional_income-item'),
expenses = document.querySelector('.expenses-title'),
expensesAmount = document.querySelector('.expenses-amount'),
additionalExpenses = document.querySelector('.additional_expenses-item'),
checkbox = document.querySelector('#deposit-check'),
depositAmount = document.querySelector('.deposit-amount'),
depositPercent = document.querySelector('.deposit-percent'),
targetAmount = document.querySelector('.target-amount'),
period = document.querySelector('.period-select'),
buttonPlusOne = document.getElementsByTagName('button')[0],
buttonPlusTwo = document.getElementsByTagName('button')[1],
calculate = document.querySelector('#start');

//result
let budgetMonth = document.getElementsByClassName('budget_month-value'),
budgetDay = document.getElementsByClassName('budget_day-value'),
expensesMonth = document.getElementsByClassName('expenses_month-value'),
additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
incomePeriod = document.getElementsByClassName('income_period-value'),
targetMonth = document.getElementsByClassName('target_month-value');


// вспомогательная функция
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let money;
//Спрашиваем у пользователя месячный доход
let start = function() {
  do {
    money = +prompt('Ваш месячный доход?', 40000);
  } while (!isNumber(money));
};
start();

// переменные
const appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 3,
  accumulatedMonth: [],
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  targetMonth: [],
  asking: function() {

    if (confirm('Есть ли у вас дополнительный заработка?')) {
      let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
      let cashIncome = 0;
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'example: "House, transport, food"');
        //appData.addExpenses = addExpenses.split(', ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ');
        appData.addExpenses = addExpenses.replace(/\b./g, function(m){ 
          return m.toUpperCase().split(', '); 
        });
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
          let expenseName = prompt('Введите обязательную статью расходов?');
          let amount = 0;
          do {
          amount = +prompt('Во сколько это обойдется?')
          } while (!isNumber(amount));
          
          appData.expenses[expenseName] = amount;
        }     
  },
  getExpensesMonth: function() {
    let sum = 0;
    for (let item in appData.expenses) {
      sum += appData.expenses[item];
    }
    appData.expensesMonth = sum;
    return appData.expensesMonth;
  },

  getBudget: function() {
  appData.budgetMonth = money - appData.expensesMonth;
  appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: function() { 
    appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
  },

  getStatusIncome: function() {
    if (appData.budgetDay >= 1200) {
      return 'У вас высокий уровень дохода';
    } else if ( 600 < appData.budgetDay && appData.budgetDay < 1200) {
      return 'У вас средний уровень дохода';
    } else if (0 < appData.budgetDay && appData.budgetDay <= 600) {
      return 'К сожалению у вас уровень дохода ниже среднего';
    } else {
      return 'Что то пошло не так';
    }
  },

  getInfoDeposit: function() {
    if(appData.deposit) {
      do {
      appData.percentDeposit = prompt('Какой годовой процент?', '15');
      } while (!isNumber(appData.percentDeposit));
      do {
      appData.moneyDeposit = prompt('Какая сумма заложена?', 20000);
      } while (!isNumber(appData.moneyDeposit));
    }
  },

  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getInfoDeposit();

//выводы в консоль :
console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log('Цель будет достигнута за ' + appData.targetMonth + ' месяца');
console.log(appData.getStatusIncome());

/* for (let item in appData) {
  console.log('Свойства: ' + item + ', его значение - ' + appData[item]);
} */

console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
console.log(appData.addExpenses);
