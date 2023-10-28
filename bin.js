let bin = document.querySelector('.bin')

const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
const todos = JSON.parse(localStorage.getItem('todos'))
const removedTodos = [];

import {exportRemovedTodos} from './script.js'

removedTodos = exportRemovedTodos();

const removedTodosUL = document.getElementById('removed-todos');

removedTodos.forEach(todo => {
    const todoEl = document.createElement('li');
    todoEl.innerText = todo.text;
    if (todo.completed) {
        todoEl.classList.add('completed');
    }
    removedTodosUL.appendChild(todoEl);
});