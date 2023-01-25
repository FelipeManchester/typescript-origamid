"use strict";
const toNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    throw 'valor deve ser number ou string';
};
console.log(toNumber(20));
async function fetchProduct() {
    const res = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await res.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
  <div>
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
  </div>
  `;
}
