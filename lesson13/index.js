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
start = document.getElementById('start'),
reset = document.getElementById('cancel'),
input = document.getElementsByClassName('input');

//result
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
targetMonthValue = document.getElementsByClassName('target_month-value')[0];

let leftInputField = document.querySelector('.data');
let rightInputField = document.querySelector('.result');

// вспомогательная функция
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

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
  accumulationPeriod: 0,
  timeGoal: 0,
  start: function() { 
    if (salaryAmount.value === '') {
      alert('Ошибка, поле "Месяцный доход" должно быть заполнено!');
      return
    }
    appData.budget = +salaryAmount.value; //зарплата  
    appData.getBudget();
    
    appData.getExpenses();
    appData.getAddExpenses();

    appData.getExpensesMonth();
    appData.calcPeriod();
    appData.getTargetMonth();
    //appData.getIncome();
    appData.getAddIncome();
    appData.actionBlock();
    appData.showResult();
    appData.reset();
  },
  showResult: function() {
    budgetMonthValue.value = this.budgetMonth; //Доход за месяц
    budgetDayValue.value = this.budgetDay; //Дневной бюджет
    expensesMonthValue.value = this.expensesMonth; //Расход за месяц
    additionalExpensesValue.value = this.addExpenses.join(', '); //Возможные расходы
    additionalIncomeValue.value = this.addIncome.join(', '); //Возможные доходы
    incomePeriodValue.value = this.accumulationPeriod; //Накопления за период
    targetMonthValue.value = this.timeGoal; //Срок достижения цели в месяцах
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
    incomeItems.forEach(function(item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
      appData.incomeMonth[itemIncome] = cashIncome;
    }
    }); 

    for (let key in appData.income) {
      appData.incomeMonth += appData.income[key]; 
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
  //Расход за месяц
  getExpensesMonth: function() { 
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key]; //работает 
    }
  },

  getBudget: function() {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth; //Доход за месяц
  this.budgetDay = Math.floor(this.budgetMonth / 30); //Дневной бюджет
  },

  getTargetMonth: function() {
    this.timeGoal = Math.ceil(targetAmount.value / this.budgetMonth);
  },

  /* getStatusIncome: function() {
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
 */
 /*  getInfoDeposit: function() {
    if(appData.deposit) {
      do {
      appData.percentDeposit = prompt('Какой годовой процент?', '15');
      } while (!isNumber(appData.percentDeposit));
      do {
      appData.moneyDeposit = prompt('Какая сумма заложена?', 20000);
      } while (!isNumber(appData.moneyDeposit));
    }
  }, */

  calcPeriod: function(){
    this.accumulationPeriod = this.budgetMonth * periodSelect.value;
  },

//Блокировать все input
  actionBlock: function() {
    let inputFields = leftInputField.querySelectorAll("input[type=text]");
    inputFields.forEach(function(item, index) {
      item.setAttribute('disabled', '');
    });
    start.style.display = 'none';
    reset.style.display = 'inline';
    incomePlus.removeEventListener('click', this.addExpensesBlock);
    expensesPlus.removeEventListener('click', this.addIncomeBlock);
  },
  //сбросить всё
  reset: function() {
    reset.addEventListener('click', function() {
    start.style.display = 'inline';
    reset.style.display = 'none';
    let leftInputFields = leftInputField.querySelectorAll("input[type=text]");
    leftInputFields.forEach(function(item, index) {
      item.removeAttribute('disabled');
      item.value = "";
    });
    let rightInputFields = rightInputField.querySelectorAll("input[type=text]");
    rightInputFields.forEach(function(item, index) {
      item.value = "";
    });
  });
  }
};

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.changeRange);
