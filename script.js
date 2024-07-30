const menubtn=document.getElementById("menu-btn");
const navlinks=document.getElementById("nav-links");
const menubtnIcon=menubtn.querySelector("i");
menubtn.addEventListener("click",(e)=>{
    navlinks.classList.toggle("open");

    const isOpen=navlinks.classList.contains("open");
    menubtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line")
})

navlinks.addEventListener("click",(e)=>{
    navlinks.classList.remove("open");
    menubtnIcon.setAttribute("class","ri-menu-line")
})

const scrollReveal={
    distance:"50px",
    origin:"top",
    duration:1000,
}

ScrollReveal().reveal(".header__container h2",{
    ...scrollReveal,
})

ScrollReveal().reveal(".header__container h1",{
    ...scrollReveal,
    delay:500,
})

ScrollReveal().reveal(".header__container p",{
    ...scrollReveal,
    delay:1000,
})

ScrollReveal().reveal(".header__btns",{
    ...scrollReveal,
    delay:1500,
})

ScrollReveal().reveal(".imgIcons",{
    ...scrollReveal,
    delay:2000,
})

ScrollReveal().reveal(".steps__card",{
    ...scrollReveal,
    interval:500,
})

ScrollReveal().reveal(".explore__card",{
    ...scrollReveal,
    duration:1000,
    interval:500,
})

ScrollReveal().reveal(".job__card",{
    ...scrollReveal,
    interval:500,
})

ScrollReveal().reveal(".offer__card",{
    ...scrollReveal,
    interval:500,
})

const swiper = new Swiper(".swiper",{
    loop:true,
    autoplay:{delay:3000},
})
