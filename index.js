window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
function navSlide() {
    let burger=document.querySelector(".burger");
    let nav=document.querySelector(".nav-list");
    let navlinks=document.querySelectorAll(".nav-list li");

    burger.addEventListener("click",function(){
        nav.classList.toggle("nav-active");
       

        // Animate Links
        navlinks.forEach((link,index) => {
            if(link.style.aniamtion){
                link.style.aniamtion='';}
           else{
               link.style.animation = `nav-linkFade 4s ease forwards ${index/7 + 3 }s`;
           }
        });

// burger animation
burger.classList.toggle("toggle");

})
};
navSlide();