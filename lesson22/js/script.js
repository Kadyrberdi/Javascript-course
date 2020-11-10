/* eslint-disable linebreak-style */
// eslint-disable-next-line strict
'use strict';

class Todo {
    constructor(form, input, todoList, todoCompleted, todoContainer) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoContainer = document.querySelector(todoContainer);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));

    }

    adToStorage() {
        localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
    }

    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem, this);
        this.adToStorage();
        this.handler();
    }

    createItem(todo) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend', `
          <span class="text-todo">${todo.value}</span>
            <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
          </div>
      `);
        if (todo.completed) {
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }

    addTodo(e) {
        e.preventDefault();
        if (this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(),
            };
            this.todoData.set(newTodo.key, newTodo);
            this.render();
        }
    }

    generateKey() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    deleteItem(elem) {
        this.todoData.forEach((item) => {
            console.log('item.key: ', item.key);
            console.log('elem.key: ', elem.key);
            if (item.key === elem.key) {
                this.todoData.delete(item.key);
            }
        });
        this.render();
    }

    completedItem(elem) {
        this.todoData.forEach((item) => {
            if (item.key === elem.key) {
                console.log('item: ', item);
                item.completed = true;
            }
        });
        this.render();
    }

    handler() {
        this.todoContainer.addEventListener('click', event => {
            if (event.target.classList.contains('todo-remove')) {
                const target = event.target.closest('.todo-item');
                this.deleteItem(target);
            }
            if (event.target.classList.contains('todo-complete')) {
                const target = event.target.closest('.todo-item');
                this.completedItem(target);
            }
        });
    }

    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
    }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-container');

todo.init();
