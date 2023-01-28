"use strict";
// EXERCICIO 1
const link = document.getElementById("origamid");
link instanceof HTMLAnchorElement ? link.href = link.href.replace('http', 'https') : '';
console.log(link);
// EXERCÍCIO 2
const links = document.querySelectorAll('.link');
const changeLinkStyle = () => {
    const linksArray = Array.from(links);
    linksArray.forEach((link) => {
        link.style.color = 'red';
        link.style.border = '2px dotted tomato';
    });
};
changeLinkStyle();
// EXERCÍCIO 3
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const nav = document.getElementById('nav');
const button = document.getElementById('btn-mobile');
function toggleMenu(event) {
    const buttonMobile = event.currentTarget;
    if (buttonMobile instanceof HTMLElement && nav) {
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        if (active) {
            button?.setAttribute('aria-expanded', 'true');
            button?.setAttribute('aria-label', 'Fechar Menu');
        }
        else {
            button?.setAttribute('aria-expanded', 'false');
            button?.setAttribute('aria-label', 'Abrir Menu');
        }
    }
}
button?.addEventListener('pointerdown', toggleMenu);
function roundNumber(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(+valor).toString();
    }
}
console.log(roundNumber('3.5'));
