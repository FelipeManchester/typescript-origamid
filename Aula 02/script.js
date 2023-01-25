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
    <h1>Exercicio API 1</h1>
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
    <hr />
  </div>
  `;
}
async function fetchCursos() {
    const res = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await res.json();
    showCourses(data);
}
fetchCursos();
function showCourses(cursos) {
    document.body.innerHTML += `
  <h1>Exercicio API 2</h1>
  `;
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
    <div>
      <h2 style='color: ${color}'>${curso.nome}</h2>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p>Tags: ${curso.tags.join(', ')}</p>
      <p>Id: ${curso.idAulas.join(' - ')}</p>
    </div>
    `;
    });
}
