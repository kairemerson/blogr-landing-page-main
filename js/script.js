//dropdown
const link = document.getElementById("connect")

const links = document.querySelectorAll(".menu-desktop li")
links.forEach((link)=>{
    link.addEventListener("click", ()=>{
        link.querySelector("div").classList.toggle("active")
    })
})