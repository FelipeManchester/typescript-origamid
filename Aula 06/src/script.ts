import { CountList } from './countBy.js';
import fetchData from './fetchData.js';
import normalizeTransaction from './normalizeTransaction.js';
import Status from './Status.js';

async function handleData() {
  const data = await fetchData<Transaction[]>(
    'https://api.origamid.dev/json/transacoes.json',
  );

  if (!data) return;
  const allTransactions = data.map(normalizeTransaction);
  fillTable(allTransactions);
  fillStatus(allTransactions);
}

function fillList(list: CountList, containerId: string): void {
  const containerElement = document.getElementById(containerId);
  Object.keys(list).forEach((key) => {
    containerElement!.innerHTML += `
    ${key}: ${list[key]}
    `;
  });
}

function fillStatus(transacoes: Normalize[]): void {
  const data = new Status(transacoes);
  const spanTotal = document.querySelector('#total span');

  spanTotal!.innerHTML += `
    ${data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'brl',
    })}
  `;

  const dayElement = document.querySelector<HTMLElement>('#day span');
  dayElement!.innerText = data.bestDay[0];

  fillList(data.pagamento, 'pagamento');
  fillList(data.status, 'status');
}

function fillTable(transaction: Normalize[]): void {
  const table = document.querySelector('#table tbody');
  if (!table) return;
  transaction.forEach((transaction) => {
    table.innerHTML += `
      <tr>
        <td>${transaction.nome}</td>
        <td>${transaction.email}</td>
        <td>R$ ${transaction.moeda}</td>
        <td>${transaction.pagamento}</td>
        <td>${transaction.status}</td>
      </tr>
    `;
  });
}

handleData();
