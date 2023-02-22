const addBtn = document.querySelector('.addtodo__btn');
const todoInp = document.querySelector('.addtodo__input');
const checker = document.querySelector('.input-checker');
const form = document.querySelector('.form__control');
const todoArea = document.querySelector('.todo__area');

eventListeners();

function eventListeners(){
    form.addEventListener('submit', addTodo);
}

