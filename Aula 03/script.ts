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
