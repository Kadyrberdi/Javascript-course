let DomElement1 = document.getElementsByClassName('div');
let best = document.getElementById('best');


function DomElement(selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
}

best.style.height = '100px';
best.style.width = '300px';
best.style.backgroundColor = 'green';
best.style.fontSize = '48px';
best.style.color = 'white';
best.style.padding = '50px';

DomElement1 = new DomElement('.block', '100px', '100px', '255.255.255', '24px', 'Hello Tutor!');

DomElement1.text = 'Hello Mentor!';

best.innerHTML = DomElement1.text;