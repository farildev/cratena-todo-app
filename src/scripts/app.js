const addBtn = document.querySelector('.addtodo__btn');
const todoInput = document.querySelector('.addtodo__input');
const checker = document.querySelector('.input-checker');
const form = document.querySelector('.form__control');
const todoUl = document.querySelector('.todo__list');

eventListeners();

function eventListeners(){
    form.addEventListener('submit', addTodo);
    
}

function addTodo(e){
    const newTodo = todoInput.value.trim();

    console.log(newTodo);
    
    
    
    e.preventDefault();
}

