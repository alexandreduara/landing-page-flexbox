const botaoMenhu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenhu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})