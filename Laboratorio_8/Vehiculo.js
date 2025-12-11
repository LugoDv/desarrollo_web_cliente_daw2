export class Vehiculo {
  #velocidad = 0;
  #estadoMotor;

  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.#estadoMotor = "apagado";
  }

  encenderMotor() {
    console.log(`Estado actual: ${this.#estadoMotor}`);
    this.#estadoMotor = "encendido";
    console.log(`Nuevo estado: ${this.#estadoMotor}`);
  }

  acelerar(incremento) {
    console.log(`Velocida Actual: ${this.#velocidad} Km/h`);
    this.#velocidad += incremento;
    console.log(`Nueva velocidad: ${this.#velocidad} Km/h`);
  }

  mostrarInformacion() {
    console.log(
      `Este vehiculo es marca: ${this.marca} y modelo:${this.modelo}`
    );
  }
}

// const vehiculo = new Vehiculo("Toyota", "corola");

// vehiculo.encenderMotor();

// vehiculo.acelerar(10);
