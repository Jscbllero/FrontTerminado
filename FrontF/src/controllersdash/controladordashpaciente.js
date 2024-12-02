import {buscarPacientes} from "../Servicios/ServiciosPaciente.js"

//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 

//-1.llamar al API
buscarPacientes()
.then(function(respuestaBack){
    console.log(respuestaBack)

    //2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila")

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
respuestaBack.forEach(function(paciente){
    console.log(paciente)
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div")
    columna.classList.add("col")


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombre
    let fechaNacimiento=document.createElement("p")
    fechaNacimiento.textContent=paciente.fechaNacimiento
    let ciudad=document.createElement("p")
    ciudad.textContent=paciente.ciudad
    let correo=document.createElement("p")
    correo.textContent=paciente.correo
    let telefono=document.createElement("p")
    telefono.textContent=paciente.telefono
    let ips=document.createElement("p")
    ips.textContent=paciente.ips
    let tienePoliza=document.createElement("p")
    tienePoliza.textContent=paciente.tienePoliza
    let grupoIngreso=document.createElement("p")
    grupoIngreso.textContent=paciente.grupoIngreso
    let fechaAfiliacion=document.createElement("p")
    fechaAfiliacion.textContent=paciente.fechaAfiliacion

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(fechaNacimiento)
    tarjeta.appendChild(ciudad)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(tienePoliza)
    tarjeta.appendChild(grupoIngreso)
    tarjeta.appendChild(fechaAfiliacion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
})

