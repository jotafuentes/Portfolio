const burger = document.querySelector('.button')
const nav = document.querySelector('.nav')

burger.addEventListener('click' ,() =>{
    nav.classList.toggle('activo')
})