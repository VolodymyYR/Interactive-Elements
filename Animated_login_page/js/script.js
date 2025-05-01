"use strict";
let container = document.querySelector('.container');
let inputName = document.querySelector('#name');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');

document.addEventListener('click', (e) =>{
    if (e.target.closest('#login') || e.target.closest('#regist')){
        container.classList.toggle('active')
        inputName.value = '';
    }
})