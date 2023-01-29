// EXERCICIO 1

const link = document.getElementById("origamid")


link instanceof HTMLAnchorElement ? link.href = link.href.replace('http', 'https') : ''

console.log(link)


// EXERCÍCIO 2

const links = document.querySelectorAll<HTMLElement>('.link')

const changeLinkStyle = () => {
 const linksArray = Array.from(links) 
  linksArray.forEach((link) => {
    link.style.color = 'red'
    link.style.border = '2px dotted tomato'

  })
}

changeLinkStyle()


// EXERCÍCIO 3

// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button


const nav = document.getElementById('nav')
const button = document.getElementById('btn-mobile')

function toggleMenu(event: PointerEvent) {
  const buttonMobile = event.currentTarget

  if (buttonMobile instanceof HTMLElement && nav) {
    nav.classList.toggle('active');

    const active = nav.classList.contains('active')

    if(active) {
      button?.setAttribute('aria-expanded', 'true');
      button?.setAttribute('aria-label', 'Fechar Menu')
    } else {
      button?.setAttribute('aria-expanded', 'false');
      button?.setAttribute('aria-label', 'Abrir Menu')
    }
  }
}

button?.addEventListener('pointerdown', toggleMenu)


// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function roundNumber(valor: number): number
function roundNumber(valor: string): string
function roundNumber(valor: number | string): number | string {
  if(typeof valor === 'number') {
    return Math.ceil(valor)
  } else {
    return Math.ceil(+valor).toString()
  }
}

console.log(roundNumber('3.5'))


// -------------------------------------------
// EXERCÍCIO 05
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.


interface Cursos {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: []
  idAulas: [];
  nivel: string;
}

async function fetchData() {
  const res = await fetch ('https://api.origamid.dev/json/cursos.json')
  const data = await res.json()
  handleData(data)
}

fetchData()

function isCursos(curso: unknown): curso is Cursos {
  if (
    curso &&
    typeof curso === 'object' &&
    'nome' in curso &&
    'horas' in curso &&
    'tags' in curso
  ) {
    return true;
  } else {
    return false
  }
}

function handleData(data: unknown) {
  if(Array.isArray(data)) {
    data.filter(isCursos).forEach((item) => {
      document.body.innerHTML += `
      <div>
       <h1>Exercício 5</h1>
       <h2>${item.nome}</h2>
       <p>${item.horas}</p>
       <p>${item.tags.join(', ')}</p>
      </div>
      `
    })
    
  }
}