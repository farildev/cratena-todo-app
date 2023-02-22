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
        checker.innerHTML = "Burani doldur qagassss"
        todoInput.classList.add('error');
    }
    else{
        console.log('Daily mission added!')
    }
    e.preventDefault();
}

function addTodoToUi(){
    document.createElement('div');
    div.className = 'todo__area';
}

function deleteTodo(){

}

function editTodo(){

}

function sendStorage(){

}

function deleteFromStorage(){

}

