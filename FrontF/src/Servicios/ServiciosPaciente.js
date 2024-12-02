//Pasos para consumir API con JS

export async function buscarPacientes(){
    //1. configurar la url del servicio que se desea consumir (hacia donde va)

const URL = "http://localhost:8080/api/paciente"

//2.se condigura la peticion del servicio a consumir (a que se va allá)

let peticion={
    
    method: "GET"
}

//3. conusmir el API (realizar acción)

let respuestaServidor=await fetch(URL,peticion)
let pacientes=await respuestaServidor.json() 
return pacientes

}

export async function registrarPaciente(datosPaciente){
    const URL="http://localhost:8080/api/paciente"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(datosPaciente)
    }
    let respuestaInicial=await fetch(URL,peticion);
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal
}