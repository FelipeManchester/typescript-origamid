import _ from 'lodash'
import Clipboard from 'clipboard'

const button = new Clipboard('button')

function handleCopy(event: Clipboard.Event) {
  console.log('copiou', event.text)
  document.querySelector('button')!.innerHTML = 'Copiado ✅';
  event.clearSelection()
}

button.on('success', handleCopy)

interface Produto {
  nome: string;
}

const livro = {
  nome: 'A Revolução dos bichos'
}