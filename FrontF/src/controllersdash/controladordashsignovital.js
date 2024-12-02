import {buscarSignoVitales} from "../Servicios/erviciosSignovitale.js"


buscarSignoVitales()
.then(function(respuestaBack){
    console.log(respuestaBack)

    let fila=document.getElementById("fila")

respuestaBack.forEach(function(signoVital){
    console.log(signoVital)
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div")
    columna.classList.add("col")


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2")
    nombre.textContent=signoVital.nombre
    let valor=document.createElement("p")
    valor.textContent=signoVital.valor
    let fechamedida=document.createElement("p")
    fechamedida.textContent=signoVital.fechamedida

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(valor)
    tarjeta.appendChild(fechamedida)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    

})
})

