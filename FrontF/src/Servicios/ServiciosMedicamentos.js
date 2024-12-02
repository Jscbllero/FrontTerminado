//Pasos para consumir API con JS

export async function buscarMedicamentos(){
    //1. configurar la url del servicio que se desea consumir (hacia donde va)

const URL = "http://localhost:8080/api/medicamento"

//2.se condigura la peticion del servicio a consumir (a que se va allá)

let peticion={
    
    method: "GET"
}

//3. conusmir el API (realizar acción)

let respuestaServidor=await fetch(URL,peticion)
let medicamentos=await respuestaServidor.json() 
return medicamentos

}

export async function registrarMedicamento(datosMedicamento){
    const URL="http://localhost:8080/api/medicamento"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(datosMedicamento)
    }
    let respuestaInicial=await fetch(URL,peticion);
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal
}