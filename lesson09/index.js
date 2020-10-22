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
calculate = document.getElementById('start');

//result
let budgetMonth = document.getElementsByClassName('budget_month-value'),
budgetDay = document.getElementsByClassName('budget_day-value'),
expensesMonth = document.getElementsByClassName('expenses_month-value'),
additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
incomePeriod = document.getElementsByClassName('income_period-value'),
targetMonth = document.getElementsByClassName('target_month-value');



