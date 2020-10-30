'use strict';

const todoControl = document.querySelector('.todo-control'),
headerInput = document.querySelector('.header-input'),
todoList = document.querySelector('.todo-list'),
todoCompleted = document.querySelector('.todo-completed'),
todoRemoved = document.querySelector('.todo-removed');


let todoData = [];


const render = function() {

  todoList.textContent = '';
  todoCompleted.textContent = '';

  todoData.forEach(function(item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
    '<div class="todo-buttons">' + 
        '<button class="todo-remove"></button>' + 
        '<button class="todo-complete"></button>' + 
    '</div>';

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

  const btnTodoComplete = li.querySelector('.todo-complete');

    btnTodoComplete.addEventListener('click', function() {
      item.completed = !item.completed;
      localStorage.setItem('todo', JSON.stringify(todoData));
      render();
  });

  const btnTodoRemove = li.querySelector('.todo-remove');

  btnTodoRemove.addEventListener('click', function() {
    //todoData = (todoData.indexOf(item)); // наработки
    todoData.splice(todoData.indexOf(item), 1); // изменяем массив возвращая первый индекс

      localStorage.setItem('todo', JSON.stringify(todoData));
      render();
  }); 

  });

};



todoControl.addEventListener('submit', function(event) {
  event.preventDefault();

  const newTodo = {
    value: headerInput.value,
    completed: false,
    removed: false
  };

  if (headerInput.value !== '') { 
  todoData.push(newTodo);
  } 

  localStorage.setItem('todo', JSON.stringify(todoData));
  headerInput.value = '';
  render();
});

if (localStorage.getItem('todo')) {
  todoData = JSON.parse(localStorage.getItem('todo'));
  render();
}

  render();
