import Persona from "./classPersona.js";

const btnEnviar=document.getElementById("enviar");
console.log(btnEnviar);

const ingresaPersona=document.querySelector("form");

console.log(ingresaPersona);

const nombre=document.getElementById("nombre"),edad=document.getElementById("edad"),dni=document.getElementById("dni"),sexo=document.getElementById("sexo"),peso=document.getElementById("peso"),altura=document.getElementById("altura"),nacimiento=document.getElementById("anioNacimiento");

const btnMostrar=document.getElementById("mostrar");

const creaPersona = (e) => {
    e.preventDefault();

    const persona= new Persona(nombre.value,edad.value,dni.value,sexo.value,nacimiento.value,peso.value,altura.value);

    ingresaPersona.reset();

    return persona;
}

ingresaPersona.addEventListener("submit", creaPersona);



//btnMostrar.addEventListener("click",);