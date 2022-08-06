const header = document.querySelector('header')

window.addEventListener("scroll", function(){
    header.classList.toggle("scrol",this.scrollY > 0)
})
let opennnn = document.querySelector('.bars');
let ull = document.querySelector('.navbar')

opennnn.onclick = () => {
    ull.classList.toggle("on")
    opennnn.classList.toggle("fa-xmark")
}

