const botaoMenu = document.querySelector(".menu-mobile");
const menuDeNavegacao = document.querySelector(".navigation");
const botaoClose = document.querySelector('.menu-mobile-close');
const menuFocus = document.querySelector(".background");
const links = document.querySelectorAll('a');

function menuMobile() {
  menuDeNavegacao.classList.toggle("active");

  if (menuDeNavegacao.classList.contains("active")) {
    menuFocus.classList.add("active");
  } else {
    menuFocus.classList.remove("active");
  }
}

botaoMenu.addEventListener("click", menuMobile);
botaoClose.addEventListener('click', menuMobile);


links.forEach( link => {
  link.addEventListener('click', e => {e.preventDefault()})
});