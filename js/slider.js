const menu=document.querySelector(".slider")
const botonMenu=document.querySelector(".menu_button")
botonMenu.addEventListener("click",function()
{
    botonMenu.classList.toggle("change")
    validar();
}
)
function validar ()
{
    if(botonMenu.classList.contains("change"))
    {
        menu.style.right="0"
    }
    else
    {
        menu.style.right="-100vw"
    }
}
document.querySelector(".fa-rectangle-xmark").addEventListener("click",function()
{
    menu.style.right="-100vw"
    botonMenu.classList.toggle("change")
})
