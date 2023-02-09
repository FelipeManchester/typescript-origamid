import countBy from './countBy.js';

type transactionValue = Normalize & { valor: number };

function filterValue(transaction: Normalize): transaction is transactionValue {
  return transaction.valor !== null;
}

export default class Status {
  private transactions;
  total;
  pagamento;
  status;
  week;
  bestDay;
  constructor(transactions: Normalize[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.week = this.setWeek();
    this.bestDay = this.setBestDay();
  }
  private setTotal() {
    const totalFilter = this.transactions
      .filter(filterValue)
      .reduce((acc, cur) => {
        return acc + cur.valor;
      }, 0);
    return totalFilter;
  }

  private setPagamento() {
    return countBy(this.transactions.map(({ pagamento }) => pagamento));
  }

  private setStatus() {
    return countBy(this.transactions.map(({ status }) => status));
  }

  private setWeek() {
    const week = {
      ['Domingo']: 0,
      ['Segunda']: 0,
      ['Terça']: 0,
      ['Quarta']: 0,
      ['Quinta']: 0,
      ['Sexta']: 0,
      ['Sábado']: 0,
    };
    for (let i = 0; i < this.transactions.length; i++) {
      const day = this.transactions[i].data.getDay();
      if (day === 0) week['Domingo'] += 1;
      if (day === 1) week['Segunda'] += 1;
      if (day === 2) week['Terça'] += 1;
      if (day === 3) week['Quarta'] += 1;
      if (day === 4) week['Quinta'] += 1;
      if (day === 5) week['Sexta'] += 1;
      if (day === 6) week['Sábado'] += 1;
    }
    return week;
  }

  private setBestDay() {
    return Object.entries(this.week).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}
