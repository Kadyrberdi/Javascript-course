'use strict';
//переменные 
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log('randomNumber: ', randomNumber);
let count = 10;


function guessRandomNumber(){
  let guessNumber = randomNumber;
  console.log('guessNumber: ', guessNumber);
  let question = +prompt('Угадай число от 1 до 100');

  if (question === null){
    alert('Игра окончена');
    return
  } else if (isNaN(question)/*  || question.trim() === '' */) {
    alert('Введи число!');
    return guessRandomNumber();
  } else if (question > randomNumber) {
    alert('Загаданное число меньше. ' + 'У вас ещё осталось ' + --count + ' попыток');

    if (count === 0) {
      let answer = confirm('У вас закончились попытки, хотите сыграть ещё раз?');
      if (answer === true) {
        return newGame(), count = 10, guessRandomNumber();
      } else {
        return
      }
    } else {
      return guessRandomNumber();
    }
  } else if (question < randomNumber) {
    alert('Загаданное число больше. ' + 'У вас ещё осталось ' + --count + ' попыток');

    if (count === 0) {
      let answer = confirm('У вас закончились попытки, хотите сыграть ещё раз?');
      if (answer === true) {
        return newGame(), count = 10, guessRandomNumber();
      } else {
        return
      }
    } else {
      return guessRandomNumber();
    }
  } else {
    let answer = confirm('Поздравляю, Вы угадали!!! Хотите сыграть ещё раз?');
    if (answer === true) {
        return newGame(), count = 10, guessRandomNumber();
      } else {
        return
      }
  }
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
};

guessRandomNumber();
newGame();


/*
switch (foo) {
  case randomNumber < guessNumber:
    guessNumber = +prompt('Загаданное число меньше');
    break;
  case randomNumber > guessNumber:
    guessNumber = +prompt('Загаданное число больше');
    break;
  case guessNumber === NaN:
    guessNumber = +prompt('Введи число!');
    break;
  case guessNumber === 0:
    break;
  case guessNumber === randomNumber:
    alert('Поздравляю, Вы угадали!!!');
    break;
  default:
    console.log('default');
}
*/