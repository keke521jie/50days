const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const nav = document.querySelector('nav')
console.log(nav);


open.onclick = () => {
    container.classList.add('show-nav')
    nav.classList.remove('nav-show')
}

close.onclick = () => {
    container.classList.remove('show-nav')
    nav.classList.add('nav-show')
}