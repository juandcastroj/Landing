
//mostar la barra de navegacion responsive

const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener('click',()=>{
    navbarlinks.classList.toggle('active')
})




//validacion del correo electronico

function validacionCorreo(elemento) {

    let text = document.getElementById(elemento.id).value;
    let cond = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!cond.test(text)) {
        document.getElementById("mensaje").innerHTML = "<button id=error ><a><em> Whoops, make sure that's is an Email </em> </a></button>"
    } else {
        document.getElementById("mensaje").innerHTML = "";
    }

}



