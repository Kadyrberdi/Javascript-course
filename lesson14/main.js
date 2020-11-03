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

    switch (this.selector) {

    case '.':
      const elemClass = document.createElement('div');
      elemClass.className = 'block';
      this.bg = 'background: green';
      this.fontSize = 'font-size: 50px';
      this.height = 'height: 50vh';
      this.width = 'width: 50vh';
      elemClass.style.cssText = `${this.bg}; ${this.fontSize}; ${this.height}; ${this.width}; color: white;`;
      elemClass.textContent = 'Created new Class';
      document.body.appendChild(elemClass);
      console.log(elemClass);
      break;

    case '#':
      const elemId = document.createElement('p');
      elemId.id = 'best';
      this.bg = 'background: red';
      this.fontSize = 'font-size: 50px';
      this.height = 'height: 50vh';
      this.width = 'width: 50vh';
      elemId.style.cssText = `${this.bg}; ${this.fontSize}; ${this.height}; ${this.width}; color: white;`;
      elemId.textContent = 'Created new Id';
      document.body.appendChild(elemId);
      console.log(elemId);
      break;

    default:
      document.write('ОШИБКА =(');
  }
};

// 2) СОЗДАТЬ НОВЫЙ ОБЪЕКТ НА ОСНОВЕ КЛАССА DOMELEMENT
const newObject = new DomElement(999, '70vh', '70vh', 'black', '35px');

//3) ВЫЗВАТЬ ЕГО МЕТОД ЧТОБЫ ПОЛУЧИТЬ ЭЛЕМЕНТ НА СТРАНИЦЕ
newObject.createElem();

console.log(newObject);

