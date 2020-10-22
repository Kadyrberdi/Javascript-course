//Восстановить порядок книг
let books = document.querySelector('.books'),
  book = document.querySelectorAll('.book');

book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);

//Заменить картинку заднего фона на другую из папки image
  document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
  document.body.style.backgroundSize = 'cover';

//Исправить заголовок в книге 3
const changeNameBook = document.getElementsByTagName('h2'); 
changeNameBook[2].textContent = 'Книга 3. this и Прототипы Объектов';
changeNameBook[2].style.color = 'darkkhaki';

//Удалить рекламу со страницы
const removeAdv = document.querySelector('.adv');
removeAdv.remove();

//Восстановить порядок глав во второй и пятой книге
let chapters = document.querySelectorAll('ul'),
chapter = document.querySelectorAll('li');

chapter[15].after(chapter[8]);
chapter[10].before(chapter[12]);
chapter[12].after(chapter[14]);
chapter[37].after(chapter[45]);
chapter[42].before(chapter[38]);
chapter[43].after(chapter[41]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
console.log('chapters: ', chapters);
console.log('chapter: ', chapter);

const newElem = chapter[0].cloneNode(true);
chapters[5].append(newElem);
newElem.textContent = 'Глава 8: За пределами ES6';
chapter[55].after(newElem);
