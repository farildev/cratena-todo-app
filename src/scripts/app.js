const form = document.querySelector('.form__control');
const componentBody = document.querySelector('.todo__body');
const todoInput = document.querySelector('.addtodo__input');
const checker = document.querySelector('.input-checker');
const todoUl = document.querySelector('.todo__list');
const deleteBtn = document.querySelector('#delete-btn')
const checkBtn = document.querySelector('#check-btn')
const addBtn = document.querySelector('.addtodo__btn');

eventListeners();

function eventListeners(){
    form.addEventListener('submit', addTodo);
}
function addTodo(e){
    const newTodo = todoInput.value.trim();
    addTodoToUI(newTodo);
    if(todoInput.value == 0){
        checker.innerHTML = "You cannot leave this field blank!"
        todoInput.classList.add('error');
        console.log('Failed!');
        setTimeout(function(){
            todoInput.classList.remove('error');
            checker.innerHTML = '';
        },2000)
    }
    else{
        console.log(newTodo)
    }
    e.preventDefault();
}

function addTodoToUI(newTodo){
    const todoBox = document.createElement("li");
    console.log(todoBox);
}

function deleteTodo(){

}

function editTodo(){

}

function sendStorage(){

}

function deleteFromStorage(){

}

