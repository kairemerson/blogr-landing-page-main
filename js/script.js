//dropdown
const link = document.getElementById("connect")

const links = document.querySelectorAll(".menu-desktop li")
links.forEach((link)=>{
    link.addEventListener("click", ()=>{
        link.querySelector("div").classList.toggle("active")
        link.classList.toggle("activea")
    })
})


//button mobile
let btnMobile = document.querySelector('.btn-mobile')

btnMobile.addEventListener("click", function(e){
    if(btnMobile.getAttribute("src") == "./images/icon-hamburger.svg"){
        btnMobile.src = "./images/icon-close.svg"
    }else{
        btnMobile.src = "./images/icon-hamburger.svg"
        
    }
})
