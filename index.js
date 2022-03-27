const container_action =  document.getElementById("container_action")
const lista__container =  document.getElementById("lista__container")
const Render =  document.getElementById("box-opacity")
const vox_skil =  document.getElementById("vox")
const boxopacity= document.getElementById("box-opacity")
const estuidnate =  document.querySelector(".estudiante")
const working =  document.querySelector(".working")
const primero =  document.querySelector(".canvas__secion")
const segundo =  document.querySelector(".yobel__seccion")
const buton = document.getElementById("buton_class")
const moon =  document.getElementById("mon")

moon.addEventListener("click" ,e =>{

        document.body.classList.toggle("blacklig")

})

buton.addEventListener("click", e =>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        })

})

estuidnate.addEventListener("click"  , e =>{
    primero.classList.toggle("color")
})
working.addEventListener("click" ,e =>{

    segundo.classList.toggle("color")


})






vox_skil.querySelectorAll(".vox_skil").forEach(item => {
    item.addEventListener("click"  ,e =>{
            e.target.parentNode.nextElementSibling.classList.toggle("box-opacity")

    })
})

container_action.addEventListener("click" ,e =>{
    lista__container.classList.toggle("bloque")
        console.log(e.target)
})
