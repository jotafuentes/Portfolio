//smooth scroll to sections//



const scrollAnimated = (element)=> {
     const section = document.querySelector(element)
     section.scrollIntoView({
         behavior: 'smooth'
     })
 }




//mobile nav//

const burger = document.querySelector('.button')
const nav = document.querySelector('.nav')

burger.addEventListener('click' ,() =>{
    nav.classList.toggle('activo')
})

