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
let ul = document.querySelector(".menu-desktop")
let call = document.querySelector("#call-to-action")

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

//voltar o call to action para display block
window.onresize = function(){
    loadImg()
}
window.onload = function(){
    loadImg()
}
function loadImg(){
    if(screen.availWidth <= 375){
        call.style.display = "none"
    }else{
        call.style.display = "block"
        
    }
}



