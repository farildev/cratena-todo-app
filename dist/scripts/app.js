const form = document.querySelector('.form__control');
const componentBody = document.querySelector('.todo__body');
const todoInput = document.querySelector('.addtodo__input');
const checker = document.querySelector('.input-checker');
const todoUl = document.querySelector('.todo__list');
const addBtn = document.querySelector('.addtodo__btn');
const deleteAllTodosBtn = document.querySelector('#delete-all-todos');
const filterInput = document.querySelector('#filter-input');
eventListeners();
//Event listeners function, all listeners working here
function eventListeners(){
    form.addEventListener('submit', addTodo);
    componentBody.addEventListener('click', deleteTodos);
    document.addEventListener("DOMContentLoaded", showTodoInUI);
    deleteAllTodosBtn.addEventListener('click', removeAllTodos);
    filterInput.addEventListener('keyup', filterTodos);
}
//Remove all todos from UI
function removeAllTodos(e){
    if(confirm("Are you want delete all todos?")){
        while(todoUl.firstElementChild != null){
            todoUl.removeChild(todoUl.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}
//Filter all todos
function filterTodos(e){
    const filterValue = e.target.value;
    const listItems = document.querySelectorAll('.todo__box');

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            listItem.setAttribute("style", "display : none !important")
        }
        else{
            listItem.setAttribute("style", "display:flex, justify-content:space-between, align-items:center");
        }
    })
}


//Add todo and creating dynamic elements
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

//Send created elements to UI
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

//Delete Todos from Lists
function deleteTodos(e){
    if(e.target.className === "bx bx-trash"){
        e.target.parentElement.parentElement.parentElement.remove();
        deleteFromStorage(e.target.parentElement.parentElement.parentElement.textContent);
    }
}
//Delete todos from Local Storage
function deleteFromStorage(deletetodo){
    let todos = getTodos();
    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Show todos in UI
function showTodoInUI(){
    let todos = getTodos();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}
//Get todos from Local storage
function getTodos(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
//Send todos to Local storage
function sendStorage(newTodo){
    let todos = getTodos();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

