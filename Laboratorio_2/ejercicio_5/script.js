class Alumno {
  constructor(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
  }

  estaAprobado() {
    return this.nota >= 5;
  }

  presentacion() {
    let aprobado = "";
    if (this.estaAprobado()) {
      aprobado = "(aprobado)";
    } else {
      aprobado = "(desaprobado)";
    }
    return (
      "soy " +
      this.nombre +
      " tengo " +
      this.edad +
      " años " +
      "y mi nota es " +
      this.nota +
      aprobado
    );
  }
}

class AlumnoBecado extends Alumno {


  constructor(nambre, edad, nota, beca) {
    super(nambre, edad, nota);
    this.beca = beca;
  }

  presentacion() {
    return super.presentacion() + " mi beca es de " + this.beca + "€";
  }
}

alumno1 = new Alumno("fabian", 29, 4);
alumno2 = new Alumno("joel", 39, 8);
alumno3 = new Alumno("aron", 29, 10);


alumnoBeca = new AlumnoBecado("andres", 25, 10, 1200);
console.log(alumno1.presentacion());
console.log(alumno2.presentacion());
console.log(alumno3.presentacion());
console.log(alumnoBeca.presentacion());
