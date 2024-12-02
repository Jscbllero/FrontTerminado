//Pasos para consumir API con JS

export async function buscarMedicos(){
    //1. configurar la url del servicio que se desea consumir (hacia donde va)

const URL = "http://localhost:8080/api/Medico"

//2.se condigura la peticion del servicio a consumir (a que se va allá)

let peticion={
    
    method: "GET"
}

//3. conusmir el API (realizar acción)

let respuestaServidor=await fetch(URL,peticion)
let medicos=await respuestaServidor.json() 
return medicos

}

export async function registrarMedico(datosMedico){
    const URL="http://localhost:8080/api/Medico"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(datosMedico)
    }
    let respuestaInicial=await fetch(URL,peticion);
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal
}
