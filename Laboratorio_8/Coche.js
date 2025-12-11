import { Vehiculo } from "./Vehiculo.js";

export class Coche extends Vehiculo {
  constructor(marca, modelo, numPuertas) {
    super(marca, modelo);
    this.numPuertas = numPuertas;
  }

  acelerar(incremento) {
    super.acelerar(incremento);
    console.log(" Motor averiado");
  }

  mostrarInformacion() {
    console.log(
      `Este coche es marca: ${this.marca}, modelo:${this.modelo} y tiene ${this.numPuertas} puertas`
    );
  }
}

// const azul = new Coche("Honda", "Civic", "2");

// azul.encenderMotor();
// console.log(azul.numPuertas);
