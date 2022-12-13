const addBtn = document.querySelector('.addtodo__btn');
const todoInp = document.querySelector('.addtodo__input');
const checker = document.querySelector('.input-checker');
const form = document.querySelector('.form__control');

form.addEventListener('submit',formSubmit);
addBtn.addEventListener('click', valueCheck);
function valueCheck(){
    if(todoInp.value === ''){
        checker.innerHTML = '<p>Dont empty</p>';
        return;
    }
    else{
        checker.innerHTML = '';
    }
}


