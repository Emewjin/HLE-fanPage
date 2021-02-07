const menu = document.querySelector('.js-menu');
const menuIcon = menu.querySelector('i');
const dropMenu = document.querySelector('.drop-content');
const SHOWING = "showing";
const topBtn = document.querySelector('.go-top');
const timesIcon = "fa-times"

function scrollTop(){
    window.scrollTo(0,0);
}
topBtn.addEventListener("click", scrollTop);

function showMenu(){
    dropMenu.classList.toggle(SHOWING);
    menuIcon.classList.toggle(timesIcon);
}
menuIcon.addEventListener("click",showMenu);

// function updateToggle(){
//     if (this.paused) {
//         // console.log('play');
//         toggle.textContent = '►';
//     } else {
//         // console.log('pause');
//         toggle.textContent = '❚❚';
//     }
// }

