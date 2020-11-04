'use strict';

//data
let incomeTitle = document.querySelector('.income-title'),
incomeAmount = document.querySelector('.income-amount'),
incomeItems = document.querySelectorAll('.income-items'),
additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
expensesTitle = document.querySelector('.expenses-title'),
expensesAmount = document.querySelector('.expenses-amount'),
expensesItems = document.querySelectorAll('.expenses-items'),
additionalExpensesItem = document.querySelector('.additional_expenses-item');

const salaryAmount = document.querySelector('.salary-amount'),
depositCheck = document.getElementById('deposit-check'),
depositBank = document.querySelector('.deposit-bank'),
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
leftInputField = document.querySelector('.data'),
rightInputField = document.querySelector('.result'),
budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
targetMonthValue = document.getElementsByClassName('target_month-value')[0],
input = document.getElementsByClassName('input');

class AppData {
  constructor (income, addIncome, incomeMonth, expenses, expensesMonth, addExpenses, deposit, percentDeposit, moneyDeposit, budget, budgetDay, budgetMonth, targetMonth) {
    this.income = income;
    this.addIncome = addIncome;
    this.incomeMonth = incomeMonth;
    this.expenses = expenses;
    this.expensesMonth = expensesMonth;
    this.addExpenses = addExpenses;
    this.deposit = deposit;
    this.percentDeposit = percentDeposit;
    this.moneyDeposit = moneyDeposit;
    this.budget = budget;
    this.budgetDay = budgetDay;
    this.budgetMonth = budgetMonth;
    this.targetMonth = targetMonth;
    
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
  }

  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  start() { 
    if (salaryAmount.value === '') {
      start.setAttribute('disabled', 'true');
      return;
    } 
    
    if (!this.isNumber(depositPercent.value) || 0 >= depositPercent.value && depositPercent.value >= 100) {
      //start.setAttribute('disabled', 'true');
      alert('Ошибка, поле "Процент" должно быть число в диапазоне от 0 до 100!');
      depositPercent.value = '';
      return;
    } 

    let allInput = document.querySelectorAll('.data input[type = text]');
    allInput.forEach(function(item) {
      item.setAttribute('disabled', 'true');
    });
    incomePlus.setAttribute('disabled', 'true');
    expensesPlus.setAttribute('disabled', 'true');
    start.style.display = 'none';
    reset.style.display = 'block';

    this.budget = +salaryAmount.value; //зарплата  

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getInfoDeposit();
    this.getBudget();
    this.getStatusIncome();
    this.actionBlock();
    this.showResult();
    this.reset();
  }

  showResult() {
    const _this = this;
      budgetMonthValue.value = this.budgetMonth; //Доход за месяц
      budgetDayValue.value = this.budgetDay; //Дневной бюджет
      expensesMonthValue.value = this.expensesMonth; //Расход за месяц
      additionalExpensesValue.value = this.addExpenses/* .join(', ') */; //Возможные расходы
      additionalIncomeValue.value = this.addIncome/* .join(', ') */; //Возможные доходы
      targetMonthValue.value = Math.ceil(this.getTargetMonth()); //Срок достижения цели в месяцах
      incomePeriodValue.value = this.calcPeriod(); //Накопления за период
      periodSelect.addEventListener('change', function() {
        incomePeriodValue.value = _this.calcPeriod();
      });
  }

  addExpensesBlock() {
    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  }

  getExpenses() {
    const _this = this;
    expensesItems.forEach(item => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        _this.expenses[itemExpenses] = cashExpenses;
      }
    });
  }

  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
    const _this = this;
    addExpenses.forEach(item => {
      item = item.trim();
      if (item !== '') {
        _this.addExpenses.push(item);
      }
    });
  }

  addIncomeBlock(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  }

  getIncome() {
  const _this = this;
    incomeItems.forEach(item => {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        _this.income[itemIncome] = cashIncome;
      }
    }); 

    for (let key in this.income) {
      this.incomeMonth += this.income[key]; 
    }
  }

  getAddIncome() {
    const _this = this;
    additionalIncomeItem.forEach(item => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        _this.addIncome.push(itemValue);
      }
    });
  }

  getExpensesMonth() { 
    for (const key in this.expenses) {
      this.expensesMonth += +this.expenses[key]; //работает 
    }
  }

  getBudget() {
  const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit; //Доход за месяц
  this.budgetDay = Math.floor(this.budgetMonth / 30); //Дневной бюджет
  }

  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  }

  getStatusIncome() {
    if (this.budgetDay >= 1200) {
      return 'У вас высокий уровень дохода';
    } else if ( 600 < this.budgetDay && this.budgetDay < 1200) {
      return 'У вас средний уровень дохода';
    } else if (0 < this.budgetDay && this.budgetDay <= 600) {
      return 'К сожалению у вас уровень дохода ниже среднего';
    } else {
      return 'Что то пошло не так';
    }
  }

  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }

  actionBlock() {
    let inputFields = leftInputField.querySelectorAll("input[type=text]");
    inputFields.forEach(function(item, index) {
      item.setAttribute('disabled', '');
    });
    start.style.display = 'none';
    reset.style.display = 'inline';
    incomePlus.removeEventListener('click', this.addExpensesBlock);
    expensesPlus.removeEventListener('click', this.addIncomeBlock);
  }

  reset() {
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
  
  getInfoDeposit() {
    if(this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
     /*  do {
      this.percentDeposit = depositPercent.value;
      } while (!isNaN(parseFloat(this.percentDeposit)) && isFinite(this.percentDeposit) || this.percentDeposit === '');
      do {
      this.moneyDeposit = depositAmount.value;
      } while (!isNaN(parseFloat(this.moneyDeposit)) && isFinite(this.moneyDeposit) || this.moneyDeposit === '');
      this.moneyDeposit === '' || this.moneyDeposit === null; */
    }
  }

  changePercent() {
    const valueSelect = this.value;
    if (valueSelect === 'other') {
      depositPercent.style.display = 'inline-block';
      depositPercent.value = '';
    } else {
      depositPercent.value = valueSelect;
      depositPercent.style.display = 'none';
    }
  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);
    }
  }

  eventListeners() {
    start.addEventListener('click', appData.start.bind(appData));
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    salaryAmount.addEventListener('keyup', appData.check);
    reset.addEventListener('click', appData.reset.bind(appData));
    periodSelect.addEventListener('change', function() {
      periodAmount.innerHTML = periodSelect.value;
    });
    depositCheck.addEventListener('change', this.depositHandler.bind(this));

    /*  let addExp = [];
    for (let i = 0; i < appData.expenses.length; i++) {
      let element = appData.expenses[i].trim();
      element = element.charAt(0).toUppercase() + element.substring(1).toLowerCase();
      addExp.push(element);
    } */
  }
}

const appData = new AppData();
appData.eventListeners();
console.log(appData);



