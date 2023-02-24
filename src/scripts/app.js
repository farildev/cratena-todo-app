const form = document.querySelector('.form__control');
const componentBody = document.querySelector('.todo__body');
const todoInput = document.querySelector('.addtodo__input');
const checker = document.querySelector('.input-checker');
const todoUl = document.querySelector('.todo__list');
const addBtn = document.querySelector('.addtodo__btn');

eventListeners();

function eventListeners(){
    form.addEventListener('submit', addTodo);
    componentBody.addEventListener('click', deleteTodos);
    document.addEventListener("DOMContentLoaded", showTodoInUI);
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
            checker.classList.remove('error');
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
        checker.classList.remove('success');
        },2000)
        addTodoToUI(newTodo);
        sendStorage(newTodo);
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


function deleteTodos(e){
    if(e.target.className === "bx bx-trash"){
        e.target.parentElement.parentElement.parentElement.remove();
        deleteFromStorage(e.target.parentElement.parentElement.parentElement.textContent);
    }
}

function deleteFromStorage(deleteTodos){
    let todos = getTodos();
    todos.forEach(function(todo,index){
        if (todo === deleteTodos){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodos(e){
    
}
function showTodoInUI(){
    let todos = getTodos();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function getTodos(){
    let todos;
    if(localStorage.getItem("todo") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todo"));
    }
    return todos;
}

function sendStorage(newTodo){
    let todos = getTodos();
    todos.push(newTodo);
    localStorage.setItem("todo", JSON.stringify(todos));
}

