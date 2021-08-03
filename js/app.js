const menu = document.querySelector(".menu");
const openmenuBtn = document.querySelector(".open_menu");
const closemenuBtn = document.querySelector(".close_menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openmenuBtn.addEventListener("click", toggleMenu);
closemenuBtn.addEventListener("click", toggleMenu);

