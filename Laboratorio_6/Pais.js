// Apartado 1: Creación de la clase

class Pais {
  constructor(nombre, poblacion, area, ciudades = []) {
    this.nombre = nombre;
    this.poblacion = poblacion;
    this.area = area;
    this.ciudades = ciudades;
  }

  incrementarPoblacion(cantidad) {
    this.poblacion += cantidad;
    console.log(this.poblacion);
  }

  densidad() {
    return this.poblacion / this.area;
  }

  compararArea(otroPais) {
    return this.area > otroPais.area
      ? `${this.nombre} es más grande que ${otroPais.nombre}`
      : `${otroPais.nombre} es más grande que ${this.nombre}`;
  }

  mostrarCiudades() {
    this.ciudades.forEach((ciudad) => console.log(ciudad));
  }

  mostrarCiudadesPorLetra() {
    this.ciudades.forEach((word) => {
      let letters = word.split("");

      letters.forEach((letter) => console.log(letter));
    });
  }
}

console.log("Instacio dos Paises\n", "--------------------------------");
const Colombia = new Pais("Colombia", 30, 20, ["Armenia,Cali,Bogota"]);
const España = new Pais("España", 20, 10, ["Barcelona,Madrid,Valencia"]);

console.log(
  "Apartado 1: LLamo la función incrementar población y muestro su resultado\n",
  "------------------------------------"
);
Colombia.incrementarPoblacion(20);
España.incrementarPoblacion(10);

console.log(
  "Apartado 2: Llamo el meteodo de densidad de cada una de las instancias\n",
  "-----------------------------------"
);
const densidadColombia = Colombia.densidad();
const densidadEspaña = España.densidad();
console.log("Densidad de Colombia:", densidadColombia);
console.log("Densidad de España", densidadEspaña);

console.log(
  " Apartado 3: Comparo el área entre los paises:\n",
  "-------------------"
);
console.log(Colombia.compararArea(España));
console.log(España.compararArea(Colombia));

console.log("Apartado 3.Muestro las cidudades:\n", "-----------------------");
console.log("Ciudadesde de Colombia:");
Colombia.mostrarCiudades();
console.log("Ciudades de España:");
España.mostrarCiudades();

console.log("Apartado 4 punto 2 : letras de cada ciudad:");
Colombia.mostrarCiudadesPorLetra();
España.mostrarCiudadesPorLetra();
