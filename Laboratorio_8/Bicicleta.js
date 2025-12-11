import { Coche } from "./Coche.js";
import { Vehiculo } from "./Vehiculo.js";

export class Bicicleta extends Vehiculo {
  constructor(marca, modelo) {
    super(marca, modelo);
  }

  acelerar(incremento) {
    super.acelerar(incremento);
    console.log(" Haz quemado 30 calorias");
  }

  encenderMotor() {
    console.log(`Parcero la bici no tiene motor :/`);
  }

  mostrarInformacion() {
    console.log(
      `Esta bicicleta es marca: ${this.marca} y es modelo:${this.modelo} `
    );
  }
}

// const gm = new Bicicleta("gm", "gm");

// gm.encenderMotor();
// const coche = new Coche("adsa", "dasd", 4);

// coche.encenderMotor();

// coche.acelerar(10);

// gm.acelerar(10);
