export default class Persona {
    #dni;
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.#dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
    get verNombre() {
      return this.nombre;
    }
  
    get verEdad() {
      return this.edad;
    }
  
    get verDNI() {
      return this.#dni;
    }
  
    get verSexo() {
      return this.sexo;
    }
  
    get verPeso() {
      return this.peso;
    }
  
    get verAlt() {
      return this.altura;
    }
  
    get verAnioNac() {
      return this.anioNacimiento;
    }
  
    set darNombre(nombre) {
      this.nombre = nombre;
    }
  
    set darEdad(edad) {
      if (edad > 0) this.edad = edad;
    }
  
    set darDNI(dni) {
      if (dni > 0) this.#dni = dni;
    }
  
    set darSexo(sexo) {
      this.sexo = sexo;
    }
  
    set darPeso(peso) {
      if (peso > 0) this.peso = peso;
    }
  
    set darAlt(altura) {
      if (altura > 0) this.altura = altura;
    }
  
    set darAnioNac(anioNac) {
      if (anioNac > 0) this.anioNacimiento = anioNac;
    }
  
    mostrarGeneracion(anioNac) {
      if (anioNac >= 1994 && anioNac <= 2010)
        document.write(
          `${this.verNombre} pertenece a la generacion Z(Rasgo caracteristico: irreverencia)`
        ); //``
      if (anioNac >= 1981 && anioNac <= 1993)
        document.write(
          `${this.verNombre} pertenece a la generacion Y(Rasgo caracteristico: frustracion)`
        );
      if (anioNac >= 1969 && anioNac <= 1980)
        document.write(
          `${this.verNombre} pertenece a la generacion X(Rasgo caracteristico: obsesion por el exito)`
        );
      if (anioNac >= 1949 && anioNac <= 1968)
        document.write(
          `${this.verNombre} pertenece a la generacion Baby boom(Rasgo caracteristico: ambicion)`
        );
      if (anioNac >= 1930 && anioNac <= 1948)
        document.write(
          `${this.verNombre} pertenece a la generacion Silent(Rasgo caracteristico: austeridad)</br>`
        );
    }
  
    esMayor() {
      if (this.verEdad >= 18)
        document.write(this.verNombre + " es mayor de edad</br>");
    }
  
    mostrarDatos() {
      document.write(
        "Nombre: " +
          this.verNombre +
          "</br>" +
          "DNI: " +
          this.verDNI +
          "</br>" +
          "Edad: " +
          this.verEdad +
          "</br>"
      );
      document.write(
        `Sexo: ${this.sexo}</br>Peso: ${this.verPeso}</br>Altura: ${this.verAlt}</br>Año de nacimiento: ${this.verAnioNac}</br>`
      );
    }
  
    generaDNI() {
      return Math.floor(Math.random() * 99999999 + 1);
    }
  }
  