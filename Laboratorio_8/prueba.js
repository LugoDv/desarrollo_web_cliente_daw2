import { Bicicleta } from "./Bicicleta.js";
import { Coche } from "./Coche.js";
import { Vehiculo } from "./Vehiculo.js";

// Instancio tres objetos de cada una de las clases
const vehiculo = new Vehiculo("Mazda", "Cx30");
const coche = new Coche("Honda", "Civic", 2);
const bibicicleta = new Bicicleta("Gm", "BMX");

console.log("---------------------------------------------------");
console.log("Ejercicio 1: Abstracción y Encapsulamiento");
console.log("---------------------------------------------------");
console.log("función encenderMotor y acelerar de Vehiculo:");

vehiculo.encenderMotor();
vehiculo.acelerar(10);

console.log("---------------------------------------------------");
console.log("Ejercicio 2: Herencia");
console.log("---------------------------------------------------");
console.log("Puertas del objeto coche:");
console.log(coche.numPuertas);
bibicicleta.encenderMotor();

console.log("---------------------------------------------------");
console.log("Ejercicio 3: Polimorfismo");
console.log("---------------------------------------------------");
console.log("Metodo acelerar de cada uno de los objetos");
console.log("Bicicleta:");
bibicicleta.acelerar(10);
console.log("Coche:");
coche.acelerar(50);

// Creo la función para inspeccionar la información de cada vehículo
function inspeccionarVehiculo(vehiculo) {
  vehiculo.mostrarInformacion();
}
console.log("---------------------------------------------------");
console.log("Ejercicio 4: Integración y Función Polimórfica");
console.log("---------------------------------------------------");
inspeccionarVehiculo(vehiculo);
inspeccionarVehiculo(coche);
inspeccionarVehiculo(bibicicleta);
