import {registrarMedicamento} from "../Servicios/ServiciosMedicamentos.js"

let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionMedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let fechaCaducidadMedicamento=document.getElementById("caducidadmedicamento")
let contraIndicacionesMedicamento=document.getElementById("indicacionesmedicamento")
let registroMedicamento=document.getElementById("registromedicamento")
let tieneCopagoMedicamento=document.getElementById("copagomedicamento")

let bottonRegistroMedicacamento=document.getElementById("buttonregistromedicamento")

bottonRegistroMedicacamento.addEventListener("click",function(EVENTO){
    EVENTO.preventDefault()
        let datosFormularioMedicamento={
            nombre:nombreMedicamento.value,
            presentacion:presentacionMedicamento.value,
            dosis:dosisMedicamento.value,
            laboratorio:laboratorioMedicamento.value,
            fechaCaducidad:fechaCaducidadMedicamento.value,
            contraIndicaciones:contraIndicacionesMedicamento.value,
            registroInvima:registroMedicamento.value,
            copago:true
        }

        
        console.log(datosFormularioMedicamento) //
        registrarMedicamento(datosFormularioMedicamento)
        .then(function(respuestaBack){
            console.log(respuestaBack)
            Swal.fire({
                title: "Registro exitoso!",
                text: "Ya eres parte de nuestra gran familia!",
                icon: "success"
              });
        })

})

