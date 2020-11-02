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

const AppData = function() {
  this.income = {};
  this.addIncome = [];
  this.incomeMonth = 0;
  this.expenses = {};
  this.expensesMonth = 0;
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.targetMonth = [];
  this.accumulationPeriod = 0;
  this.timeGoal = 0;

};

AppData.prototype.check = function() {
  if (salaryAmount.value !== '') {
    start.removeAttribute('disabled');
  }
};

AppData.prototype.start = function() { 
  if (salaryAmount.value === '') {
    start.setAttribute('disabled', 'true');
    return
  }
  let allInput = document.querySelectorAll('.data input[type = text]');
  allInput.forEach(function(item) {
    item.setAttribute('disabled', 'true');
  });
  incomePlus.setAttribute('disabled', 'true');
  expensesPlus.setAttribute('disabled', 'true');
  start.style.display = 'none';
  cancel.style.display = 'block';

  this.budget = +salaryAmount.value; //зарплата  
  
  this.getExpenses();
  //this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  //this.getInfoDeposit();
  this.getStatusIncome();
  this.calcPeriod();
  this.getTargetMonth();
  this.actionBlock();
  this.showResult();
  this.reset();
};

AppData.prototype.showResult = function() {
    budgetMonthValue.value = this.budgetMonth; //Доход за месяц
    budgetDayValue.value = this.budgetDay; //Дневной бюджет
    expensesMonthValue.value = this.expensesMonth; //Расход за месяц
    additionalExpensesValue.value = this.addExpenses.join(', '); //Возможные расходы
    additionalIncomeValue.value = this.addIncome.join(', '); //Возможные доходы
    incomePeriodValue.value = this.accumulationPeriod; //Накопления за период
    targetMonthValue.value = Math.ceil(this.targetMonth()); //Срок достижения цели в месяцах
    targetMonthValue.value = this.timeGoal;  
  };
  AppData.prototype.addExpensesBlock = function(){
    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  };
  Appdata.prototype.getExpenses = function() {
    expensesItems.forEach(function(item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  };
  AppData.prototype.getAddExpenses = function() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  };
  AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  };
  AppData.prototype.getIncome = function() {
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
  };
  AppData.prototype.getAddIncome = function() {
    additionalIncomeItem.forEach(function(item) {
      let itemValue = item.value.trim();
      if (item !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  };
  //Расход за месяц
  AppData.prototype.getExpensesMonth = function() { 
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key]; //работает 
    }
  };

  AppData.prototype.getBudget = function() {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth; //Доход за месяц
  this.budgetDay = Math.floor(this.budgetMonth / 30); //Дневной бюджет
  };

  AppData.prototype.getTargetMonth = function() {
    this.timeGoal = Math.ceil(targetAmount.value / this.budgetMonth);
  };

  AppData.prototype.getStatusIncome = function() {
    if (appData.budgetDay >= 1200) {
      return 'У вас высокий уровень дохода';
    } else if ( 600 < appData.budgetDay && appData.budgetDay < 1200) {
      return 'У вас средний уровень дохода';
    } else if (0 < appData.budgetDay && appData.budgetDay <= 600) {
      return 'К сожалению у вас уровень дохода ниже среднего';
    } else {
      return 'Что то пошло не так';
    }
  };

 AppData.prototype.getInfoDeposit = function() {
    if(appData.deposit) {
      do {
      appData.percentDeposit = prompt('Какой годовой процент?', '15');
      } while (!isNumber(appData.percentDeposit));
      do {
      appData.moneyDeposit = prompt('Какая сумма заложена?', 20000);
      } while (!isNumber(appData.moneyDeposit));
    }
  };

  AppData.prototype.calcPeriod = function(){
    this.accumulationPeriod = this.budgetMonth * periodSelect.value;
  };

//Блокировать все input
  AppData.prototype.actionBlock = function() {
    let inputFields = leftInputField.querySelectorAll("input[type=text]");
    inputFields.forEach(function(item, index) {
      item.setAttribute('disabled', '');
    });
    start.style.display = 'none';
    reset.style.display = 'inline';
    incomePlus.removeEventListener('click', this.addExpensesBlock);
    expensesPlus.removeEventListener('click', this.addIncomeBlock);
  };
  //сбросить всё
  AppData.prototype.reset = function() {
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
  };



const appData = new AppData();

console.log(appData);

/*
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.changeRange);
 */