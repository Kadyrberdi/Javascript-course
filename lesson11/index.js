'use strict';

//data
let salaryAmount = document.querySelector('.salary-amount'),
incomeTitle = document.querySelector('.income-title'),
incomeAmount = document.querySelector('.income-amount'),
incomeItems = document.querySelectorAll('.income-items'),
additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
expensesTitle = document.querySelector('.expenses-title'),
expensesAmount = document.querySelector('.expenses-amount'),
expensesItems = document.querySelectorAll('.expenses-items'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'),
depositCheck = document.querySelector('#deposit-check'),
depositAmount = document.querySelector('.deposit-amount'),
depositPercent = document.querySelector('.deposit-percent'),
targetAmount = document.querySelector('.target-amount'),
periodSelect = document.querySelector('.period-select'),
periodAmount = document.querySelector('.period-amount'),
btnPlus = document.getElementsByTagName('button'),
incomePlus = btnPlus[0],
expensesPlus = btnPlus[1],
start = document.getElementById('start');

//result
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
targetMonthValue = document.getElementsByClassName('target_month-value')[0];


// вспомогательная функция
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}




// переменные
const appData = {
  income: {},
  addIncome: [],
  incomeMonth: 0,
  expenses: {},
  expensesMonth: 0,
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  targetMonth: [],
  start: function() {
    if (salaryAmount.value === '') {
      alert('Ошибка, поле "Месяцный доход" должно быть заполнено!');
      return
    }
    appData.budget = +salaryAmount.value;

    appData.changeRange();

    appData.getExpenses();
    appData.getAddExpenses();

    appData.getExpensesMonth();

    appData.getIncome();
    appData.getAddIncome();

    appData.getBudget();

    appData.showResult();
  
  },
  showResult: function() {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue = appData.calcPeriod();
  },
  addExpensesBlock: function(){
    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },
  getExpenses: function() {
    expensesItems.forEach(function(item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getAddExpenses: function() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  addIncomeBlock: function(){
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  },
  getIncome: function() {
    /* incomeItems.forEach(function(item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.incomeMonth[itemIncome] = cashIncome;
      }
    });  */
    if (confirm('Есть ли у вас дополнительный заработка?')) {
      let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
      let cashIncome = 0;
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }
    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key]; 
    }
  },
  getAddIncome: function() {
    additionalIncomeItem.forEach(function(item) {
      let itemValue = item.value.trim();
      if (item !== '') {
        appData.addIncome.push(itemValue);
      }
    });
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
  appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
  appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: function() {
    return targetAmount.value / appData.budgetMonth;
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

  calcPeriod: function(){
    return appData.budgetMonth * periodSelect.value;
  },

  changeRange: function(event) {
    console.log(event.type);
    console.log(event.target.value);
    appData.periodAmount.innerHTML = event.target.value;
  }
};

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.changeRange);

//appData.getInfoDeposit();
//выводы в консоль :
/* console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getStatusIncome()); */

/* for (let item in appData) {
  console.log('Свойства: ' + item + ', его значение - ' + appData[item]);
} */

