//dropdown
const link = document.getElementById("connect")

const links = document.querySelectorAll(".menu-desktop li")
links.forEach((link)=>{
    link.addEventListener("click", ()=>{
        link.querySelector("div").classList.toggle("active")
        link.classList.toggle("activea")
    })
})


let btnMobile = document.querySelector('.btn-mobile')
let ul = document.querySelector(".menu-desktop")
let call = document.querySelector("#call-to-action")
let img = document.querySelector(".future img")
let imgLaptop = document.querySelector(".powerful img")

//button mobile hamburger and close
btnMobile.addEventListener("click", function(e){
    if(btnMobile.getAttribute("src") == "./images/icon-hamburger.svg"){
        btnMobile.src = "./images/icon-close.svg"
        ul.style.display = "block"
        call.style.display = "block"
    }else{
        btnMobile.src = "./images/icon-hamburger.svg"
        ul.style.display = "none"
        call.style.display = "none"
    }
})

//voltar o call to action para display block e mudar imagens
window.onresize = function(){
    loadCall()
    loadImg()
}
window.onload = function(){
    loadCall()
    loadImg()
}
function loadCall(){
    if(screen.availWidth > 375){
        call.style.display = "block"
    }else{
        call.style.display = "none"
        
    }
}

function loadImg(){
    if(screen.availWidth <= 375){
        img.src = "./images/illustration-editor-mobile.svg"
        imgLaptop.src = "./images/illustration-laptop-mobile.svg"
    }else{
        img.src = "./images/illustration-editor-desktop.svg"
        imgLaptop.src = "./images/illustration-laptop-desktop.svg"
    }
}


