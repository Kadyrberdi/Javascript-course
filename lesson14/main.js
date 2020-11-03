/*
1) СДЕЛАТЬ КЛАСС DOMELEMENT, КОТОРЫЙ СОДЕРЖИТ СВОЙСТВА:
  - SELECTOR, 
  - HEIGHT, 
  - WIDTH, 
  - BG, 
  - FONTSIZE
*/

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}
/*
СОДЕРЖИТ МЕТОД, КОТОРЫЙ СОЗДАЕТ ЭЛЕМЕНТ НА СТРАНИЦЕ В ЗАВИСИМОСТИ ОТ УСЛОВИЯ:  

- ЕСЛИ СТРОКА SELECTOR НАЧИНАЕТСЯ С ТОЧКИ, СОЗДАЕМ DIV С КЛАССОМ
- ЕСЛИ СТРОКА SELECTOR  НАЧИНАЕТСЯ С РЕШЕТКИ # ТО СОЗДАЕМ ПАРАГРАФ С ID

пример:
если передана строка '.block', то функция конструктор создает элемент с class="block"
если передана строка '#best', то функция конструктор создает элемент с id =best"
*/

DomElement.prototype.createElem = function () {
  this.selector = prompt('Пожалуйста, введите . или #');
  /*
  с помощью cssText задавать стили: 
  - высотой - height,
  - шириной - width, 
  - background - bg
  - размер текста fontSize 
  */
  this.height = '100px';
  this.width = '300px';
  this.bg = 'green';
  this.fontSize = '48px';

  switch (this.selector) {
    case '.':
      let elemClass = document.body.createElement('div');
      elemClass.classList.add('block');
      elemClass.innerHTML = '<h1>Created Class</h1>';
      break;

    case '#':
      let elemId = document.createIdent('p');
      elemId.idList.add('best');
      elemId.innerHTML = '<h2>Created ID</h2>';
      break;

    default:
      document.write('ОШИБКА =('); // к примеру 
  }
};

const DomElement1 = new DomElement();
DomElement.createElem();

