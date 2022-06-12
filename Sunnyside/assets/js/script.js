
/*
 * selecionar botao menu
 ! selecionar a nav
 ? fazer a troca
 */

 let menu = document.querySelector('.menu');
 let nav = document.querySelector('nav');

 menu.addEventListener('click', () => {

    if (nav.classList.contains('nav-show')) {
        nav.classList.remove('nav-show');
    } else {
        nav.classList.add('nav-show');
    }

 })




 /*
    funçao que percorre os li do html e fecho
    o menu quando clicado.
 */
 let links = document.querySelectorAll('li')
   
 for ( let i in links) {
     
     links[i].addEventListener('click', () => {

        nav.classList.remove('nav-show');
     })
 }

 