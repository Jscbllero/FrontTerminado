//Pasos para consumir API con JS

export async function buscarEnfermedades(){
    //1. configurar la url del servicio que se desea consumir (hacia donde va)

const URL = "http://localhost:8080/api/enfermedad"

//2.se condigura la peticion del servicio a consumir (a que se va allá)

let peticion={
    
    method: "GET"
}

//3. conusmir el API (realizar acción)

let respuestaServidor=await fetch(URL,peticion)
let signoVitales=await respuestaServidor.json() 
return signoVitales

}

export async function registrarEnfermedad(datosEnfermedad){
    const URL="http://localhost:8080/api/enfermedad"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(datosEnfermedad)
    }
    let respuestaInicial=await fetch(URL,peticion);
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal
}