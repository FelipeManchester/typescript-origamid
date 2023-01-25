const toNumber = (value: number | string) => {
  if(typeof value === 'number') {
    return value 
  } else if(typeof value === 'string') {
    return Number(value)
  } 
  throw 'valor deve ser number ou string'
}


console.log(toNumber(20))

// Exercicio API

type Empresa = {
  nome: string;
  fundacao: number;
  pais: string;
}

type Data = {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa
  empresaMontadora: Empresa
}

async function fetchProduct() {
  const res = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await res.json();
  showProduct(data)
}

fetchProduct();

function showProduct(data: Data) {
  document.body.innerHTML = `
  <div>
    <h1>Exercicio API 1</h1>
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
    <hr />
  </div>
  `
}


// Exercicio API 2

type Cursos = {
  nome: string;
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
  tags: string[];
}

async function fetchCursos() {
  const res = await fetch ('https://api.origamid.dev/json/cursos.json');
  const data = await res.json();
  showCourses(data);
}

fetchCursos();

function showCourses(cursos: Cursos[]) {
  document.body.innerHTML += `
  <h1>Exercicio API 2</h1>
  `
  cursos.forEach(curso => {
    let color;
    if(curso.nivel === 'iniciante') {
      color = 'blue'
    } else if (curso.nivel === 'avancado') {
    color = 'red'
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
    `
  })
}