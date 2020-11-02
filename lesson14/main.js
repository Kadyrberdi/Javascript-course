let DomElement1 = document.getElementsByClassName('div');
let best = document.getElementById('best');


function DomElement(selector, height, width, bg, fontSize, html) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

best.style.height = '100px';
best.style.width = '300px';
best.style.backgroundColor = 'green';
best.style.fontSize = '48px';
best.style.color = 'white';
best.style.padding = '50px';

DomElement1 = new DomElement('.block', '100px', '100px', '255.255.255', '24px', 'Hello everybody!');

DomElement1.innerHTML = 'html';
document.body.append(DomElement1);
console.log('DomElement1: ', DomElement1);
console.log('best: ', best);

//https://developer.mozilla.org/ru/docs/Web/API/Element/innerHTML
//https://learn.javascript.ru/document-write
//https://rolling-scopes-school.github.io/lerachukovich-JS2020Q3/virtual-keyboard/
//https://github.com/rolling-scopes-school/tasks/blob/master/tasks/ready-projects/virtual-keyboard.md