declare global {
  type Payments = 'Boleto' | 'Cartão de Crédito';
  type Status =
    | 'Paga'
    | 'Recusada pela operadora de cartão'
    | 'Aguardando pagamento'
    | 'Estornada';

  interface Transaction {
    Status: Status;
    ID: number;
    Data: string;
    Nome: string;
    Email: string;
    ['Forma de Pagamento']: Payments;
    ['Valor (R$)']: string;
    ['Cliente Novo']: number;
  }

  interface Normalize {
    nome: string;
    id: number;
    data: Date;
    status: Status;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: Payments;
    novo: boolean;
  }
}

export default function normalizeTransaction(
  transaction: Transaction,
): Normalize {
  return {
    nome: transaction.Nome,
    id: transaction.ID,
    data: stringToDate(transaction.Data),
    status: transaction.Status,
    email: transaction.Email,
    moeda: transaction['Valor (R$)'],
    valor: moedaToNumber(transaction['Valor (R$)']),
    pagamento: transaction['Forma de Pagamento'],
    novo: Boolean(transaction['Cliente Novo']),
  };
}

function moedaToNumber(moeda: string): number | null {
  /** Recebe string e retorna number: Ex: '1,200.50' -> 1200,50 */
  const number = Number(moeda.replaceAll('.', '').replace(',', '.'));
  return isNaN(number) ? null : number;
}

function stringToDate(text: string): Date {
  const [date, time] = text.split(' ');
  const [day, month, year] = date.split('/').map(Number);
  const [hour, minute] = time.split(':').map(Number);
  return new Date(year, month - 1, day, hour, minute);
}
