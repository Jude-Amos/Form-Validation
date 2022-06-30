//simple form

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phonenumberInput = document.querySelector('#phone-number');
const passwordInput = document.querySelector('#password');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || phonenumberInput.value === '' || passwordInput.value === ''){
       msg.classList.add('error');
       msg.innerHTML = 'please enter all fields';

       setTimeout(() => msg.remove(), 5000)
       alert('please enter all fields')
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${phonenumberInput.value} : ${passwordInput.value}`));
        alert('Sign-Up completed')

        userList.appendChild(li)
    }
   
}

