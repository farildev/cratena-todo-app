const form = document.querySelector('.form__control');
const componentBody = document.querySelector('.todo__body');
const todoInput = document.querySelector('.addtodo__input');
const checker = document.querySelector('.input-checker');
const todoUl = document.querySelector('.todo__list');
const addBtn = document.querySelector('.addtodo__btn');

eventListeners();

function eventListeners(){
    form.addEventListener('submit', addTodo);
}
function addTodo(e){
    const newTodo = todoInput.value.trim();

    if(todoInput.value === ''){
        checker.innerHTML = "You cannot leave this field blank!"
        todoInput.classList.add('error');
        checker.classList.add('error');
        console.log('Failed!');
        setTimeout(function(){
            todoInput.classList.remove('error');
            checker.innerHTML = '';
        },2000)
    }
    else{
        checker.innerHTML = "Todo added successfully!"
        todoInput.classList.add('success');
        checker.classList.add('success');
        setTimeout(function(){
            checker.innerHTML = ""
        todoInput.classList.remove('success');
        },2000)
        addTodoToUI(newTodo);
    }
    e.preventDefault();
}

function addTodoToUI(newTodo){
    const todoBox = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    const btnContainer = document.createElement("div");

    /*Customize dynamic elements */
    btnContainer.className = "todo-config-btn";
    checkBtn.className = "  check-btn";
    checkBtn.innerHTML = "<i class='bx bx-check'></i>";
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "<i class='bx bx-trash'></i>";
    btnContainer.appendChild(checkBtn);
    btnContainer.appendChild(deleteBtn);
    todoBox.className = "todo__box";

    /*Append Child */
    todoBox.appendChild(document.createTextNode(newTodo));
    todoBox.appendChild(btnContainer);
    todoUl.appendChild(todoBox);
    todoInput.value = "";
}

function showAlert(type,message){
    const alertBox = document.createElement("div");
    alertBox
}

function deleteTodo(){

}

function editTodo(){

}

function sendStorage(){

}

function deleteFromStorage(){

}

