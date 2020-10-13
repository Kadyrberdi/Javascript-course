//первая задания
//условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке
let lang = prompt('Для английского языка напишите "en", для русского языка напишите "ru"')

if (lang === 'ru') {
  console.log('daysOfWeekend: ' + ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']);
} else if (lang === 'en') {
  console.log('daysOfWeekend: ' + ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
} else {
  console.log('У нас нет такой язык!');
}




//вторая задания
let namePerson = prompt('Напишите ваше Имя ');

if (namePerson === 'Артем') {
  let level = ['Директор']; 
} else if (namePerson === 'Максим') {
  level = ['Преподаватель'];
} else {
  level = ['Студент'];
}

console.log('level: ', level);
