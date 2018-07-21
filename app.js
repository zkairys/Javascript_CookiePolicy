const cookies = document.querySelector(".cookies");
const cokiesButton = document.querySelector(".cookies__button");

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', checkLocal);
    cokiesButton.addEventListener('click', addLocal);
}

function checkLocal() {
    if(localStorage.getItem('cookiePolicyAccepted') === null){
        cookies.classList.add("animate-in"); 
    } 
}

function addLocal(){
    localStorage.setItem('cookiePolicyAccepted', true);
    cookies.classList.add("animate-out"); 
}



