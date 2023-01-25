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
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
  </div>
  `
}