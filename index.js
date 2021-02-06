const menu = document.querySelector('.js-menu');
const menuIcon = menu.querySelector('i');
const dropMenu = document.querySelector('.drop-content');
const SHOWING = "showing";
const topBtn = document.querySelector('.go-top');

function scrollTop(){
    window.scrollTo(0,0);
}
topBtn.addEventListener("click", scrollTop);

function showMenu(){
    dropMenu.classList.toggle(SHOWING);
}
menuIcon.addEventListener("click",showMenu);

