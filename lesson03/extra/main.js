//первая задания
//условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке
let lang = prompt('Для английского языка напишите "en", для русского языка напишите "ru"')

//Решение через if else:
if (lang === 'ru') {
  console.log('daysOfWeekend: ' + ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']);
} else if (lang === 'en') {
  console.log('daysOfWeekend: ' + ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
} else {
  console.log('У нас нет такой язык!');
}

//Решение через switch-case:


switch (lang) {
	case 'ru':
		let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	break;
	case 'en':
    arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	break;
}
console.log('arr: ', arr);



//Решение через многомерный массив:
  arr = {
	'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
console.log(arr[lang]);


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
