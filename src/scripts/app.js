const addBtn = document.querySelector('.addtodo__btn');
const todoInp = document.querySelector('.addtodo__input');
const checker = document.querySelector('.input-checker');
const form = document.querySelector('.form__control');

eventListeners();

function eventListeners(){
    form.addEventListener('submit',formSubmit);
    addBtn.addEventListener('click', valueCheck);
}

function formSubmit(e){
    e.preventDefault();
    
}

function valueCheck(){
    const todoInputValue = todoInp.value.trim();
    if(todoInputValue === ''){
        checker.innerHTML = 'This section cannot be left blank';
        todoInp.classList.add('error');
    }
    else{
        console.log(todoInputValue);
    }
}

function addTodo(){

}

function addTodoToUI(){

}

