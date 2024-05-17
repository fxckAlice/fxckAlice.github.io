const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".header-navbox");
const body = document.querySelector("body");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    body.classList.toggle("active");

});