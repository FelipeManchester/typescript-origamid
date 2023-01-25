"use strict";
// const produto = 'Livro'
// const preco = 200
// const carro = {
//   marca: 'ford',
//   portas: 4
// }
// function somar(a: number, b: number) {
//   return a + b;
// }
// somar(4, 3)
// const playstation = {
//   nome: 'PS5',
//   preco: '3500'
// }
// function transformPrice(produto: {nome: string; preco: string}) {
//   produto.preco = 'R$ ' + produto.preco;
//   return produto
// }
// const newProduct = transformPrice(playstation)
// console.log(newProduct)
// // tarefa
// function normalizarFrase(frase: string) {
//   return frase.trim().toLowerCase();
// }
// console.log(normalizarFrase('      Uma vez Flamengo, sempre Flamengo'))
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
