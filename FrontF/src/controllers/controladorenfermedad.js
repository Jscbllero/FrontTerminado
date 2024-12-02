import {registrarEnfermedad} from "../Servicios/ServiciosEnfermedades.js"


let nombreEnfermedad=document.getElementById("nombreenfermedad")
let sintomasEnfermedad=document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad=document.getElementById("clasificacionenfermedad")
let gradoEnfermedad=document.getElementById("gradoenfermedad")
let probabilidadDeVidaEnfermedad=document.getElementById("probabilidadvidaenfermedad")

let bottonRegistroEnfermedad=document.getElementById("buttonregistroenfermedad")

bottonRegistroEnfermedad.addEventListener("click",function(EVENTO){
    EVENTO.preventDefault()
        let datosFormularioEnfermedad={
            nombre:nombreEnfermedad.value,
            sintomas:sintomasEnfermedad.value,
            clasificacion:clasificacionEnfermedad.value,
            grado:gradoEnfermedad.value,
            probabilidadDeVida:probabilidadDeVidaEnfermedad.value, 
        }

       
        console.log(datosFormularioEnfermedad) //
        registrarEnfermedad(datosFormularioEnfermedad) 
        .then(function(respuestaBack){
            console.log(respuestaBack)
            Swal.fire({
                title: "Registro exitoso!",
                text: "Ya eres parte de nuestra gran familia!",
                icon: "success"
              });
        })
})