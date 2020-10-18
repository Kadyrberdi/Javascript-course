'use strict';
//переменные 
let guessNumber,
    foo = 0,
    randomNumber;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
randomNumber = getRandomNumber(1, 101);
console.log('randomNumber: ', randomNumber);

guessNumber = +prompt('Угадай число от 1 до 100');
console.log('guessNumber: ', guessNumber);

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
    alert('Игра окончена');
    break;
  case guessNumber === randomNumber:
    alert('Поздравляю, Вы угадали!!!');
    break;
  default:
    console.log('default');
}
