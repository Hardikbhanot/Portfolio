const svg= document.querySelector(".svg")
    const width= window.innerWidth
    console.log(width)
    if(width<=768){
        svg.innerHTML=""
    }
const burger = document.querySelector(".burger")
const links =document.querySelector(".nav-links")
const link =document.querySelectorAll(".nav-link")
const logo=document.querySelector(".logo")
const nav= document.querySelector("nav")
burger.addEventListener('click',()=>{
    links.classList.toggle("open")
    link.classList.toggle("fade")
    link.classList.toggle("open")
    logo.classList.toggle("open")
    nav.classList.toggle("open")
})

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
