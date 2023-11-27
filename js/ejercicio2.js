import Persona from "./classPersona.js";

const ingresaPersona = document.querySelector("form");

const nombre = document.getElementById("nombre"),
  edad = document.getElementById("edad"),
  dni = document.getElementById("dni"),
  sexo = document.getElementById("sexo"),
  peso = document.getElementById("peso"),
  altura = document.getElementById("altura"),
  nacimiento = document.getElementById("anioNacimiento");

const btnMostrar = document.getElementById("mostrar");
const modalMostrar = document.getElementById("person-ing");
const btnMayor = document.getElementById("mayor");
const padre = document.getElementById("padre");
const btnVolver = document.getElementById("volver");
const btnGeneracion = document.getElementById("generacion");

const personaIng = new bootstrap.Modal(document.getElementById("person-ing"));
const generacion = () => {};
const mostrarDatos = () => {
  const parrDatos = document.createElement("p");

  parrDatos.innerHTML =
    "Nombre: " +
    nombre.value +
    "<br>Edad: " +
    edad.value +
    "<br>DNI: " +
    dni.value +
    "<br>Sexo: " +
    sexo.value +
    "<br>Peso: " +
    peso.value +
    "<br>Altura: " +
    altura.value +
    "<br>Año de nacimiento: " +
    nacimiento.value;

  padre.insertBefore(parrDatos, btnVolver);

  personaIng.show();
};

const mayorEdad = () => {
  console.log(nacimiento.value);
  if (nacimiento.value >= 18)
    alert(nombre.value + " es mayor de edad" + nacimiento.value);
  else alert(nombre.value + " es menor de edad");
};

const creaPersona = (e) => {
  e.preventDefault();

  const persona = new Persona(
    nombre.value,
    edad.value,
    dni.value,
    sexo.value,
    nacimiento.value,
    peso.value,
    altura.value
  );

  ingresaPersona.reset();

  return persona;
};

ingresaPersona.addEventListener("submit", creaPersona);
const pers=creaPersona(); console.log(pers);

btnMostrar.addEventListener("click", mostrarDatos);

btnMayor.addEventListener("click", mayorEdad);

btnGeneracion.addEventListener("click", generacion);
