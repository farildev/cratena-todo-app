const addBtn = document.querySelector('.addtodo__btn');
const todoInp = document.querySelector('.addtodo__input');
const checker = document.querySelector('.input-checker');
const form = document.querySelector('.form__control');

eventListeners();

function eventListeners(){
    form.addEventListener('submit', addTodo);
}

function addTodo(e){
    const newTodo = todoInp.value.trim();
    // if(todoInputValue === ''){
    //     checker.innerHTML = 'This section cannot be left blank';
    //     todoInp.classList.add('error');
    // }
    // else{
    //     console.log(newTodo);
    // }
    addTodoToUI(newTodo);

    e.preventDefault();
    
}


function addTodoToUI(newTodo){
    const listItem = document.createElement('li');
    console.log(listItem);
}

