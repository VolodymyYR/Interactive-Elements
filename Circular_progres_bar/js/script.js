"use strict"

const progressContainer = document.querySelector("#progress");
const progressText = document.querySelector("#progressText");
const progressInput = document.querySelector("#progress-range");

console.log(progressInput);

progressInput.addEventListener('input', () => {
    const value = progressInput.value;
    progressText.textContent = `${value}%`;
    progressContainer.style.background = `conic-gradient(rgb(51, 210, 101) ${value * 3.6}deg, #444 0deg)`;

    if(value == 100){
        progressContainer.style.boxShadow = `0 0 20px 3px rgb(51, 210, 101)`;
        progressText.style.boxShadow = `inset 0 0 20px 3px rgb(51, 210, 101)`;
    } else {
        progressContainer.style.boxShadow = ``;
        progressText.style.boxShadow = ``;
    }
})