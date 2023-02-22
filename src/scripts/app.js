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
        console.log('Daily mission added!')
    }
    e.preventDefault();
}

function addTodoToUI(newTodo){
    const todoBox = document.createElement("div");
    const listItem = document.createElement("li");
    todoBox.className = "todo__box";
}

function deleteTodo(){

}

function editTodo(){

}

function sendStorage(){

}

function deleteFromStorage(){

}

