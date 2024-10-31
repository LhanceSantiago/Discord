const burger = document.querySelector('.toggle__menu');
const headerMenu = document.querySelector('.header__menu');
const headerClose = document.querySelector('.headerClose');
const logo = document.querySelector('.header__logo');
const body = document.querySelector('body');

burger.addEventListener("click", () => {
    headerMenu.classList.add("open");
    logo.classList.add("invisible");
    body.classList.add("unscroll");
});

headerClose.addEventListener("click", () => {
    headerMenu.classList.remove("open");
    logo.classList.remove("invisible");
    body.classList.remove("unscroll");
});