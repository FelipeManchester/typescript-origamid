// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

interface SellsDetails {
  marca: string;
  cor: string;
}
type Vendas = [string, number, string, SellsDetails];

async function fetchData() {
  const res = await fetch ('https://api.origamid.dev/json/vendas.json')
  const data = await res.json();
  somarVendas(data)
}

const somarVendas = (vendas: Vendas[]) => {
  const total = vendas.reduce((acc, cur) => {
    return acc + cur[1]
  }, 0)

  document.body.innerHTML += `
  <h1>Exercício 1</h1>
  <p>Total de vendas: R$ ${total}
  <hr>
  `
}
fetchData()