const btn = document.querySelector('.fa-bars');
const menu = document.querySelector('.menuMobile');
let x = document.querySelector('.fa-x')

btn.addEventListener('click', () => {

      menu.style.display = 'flex'
    btn.style.display = "none"
    
})
x.addEventListener('click', () =>{
    menu.style.display = 'none'
    btn.style.display = "flex"
})