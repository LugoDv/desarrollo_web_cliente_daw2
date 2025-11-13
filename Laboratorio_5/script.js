console.log("--------------------------------------------------------------");
console.log("1 Ejercicio 1");
console.log("--------------------------------------------------------------");

// 1.1 Creación de matriz
console.log("Creación de matriz");
const inventario = [
  ["Teclado", 5, 30],
  ["Mouse", 3, 10],
  ["Pantalla", 4, 100],
];
console.log("Matriz Inventario:", inventario);

console.log("--------------------------------------------------------------");
// 1.2 Acceso y modificación Matricial
console.log("1.2 Acceso y modificación matricial");
console.log("--------------------------------------------------------------");
console.log(`Acceso matris: ${inventario[1][2]} `);

// numero de total de filas

console.log(`Numero total de filas ${inventario.length}`);

//numero de elementos de la primera fila
console.log(`numero de elementos de la primera fila: ${inventario[0].length}`);

// 1.3 Recorrido Simple
console.log("1.3 Recorrido simple");
inventario.forEach((producto) => console.log(producto[0]));

console.log("--------------------------------------------------------------");

// 2. Ejecicios con funciones
console.log("2. Ejercciios con funciones");
console.log("--------------------------------------------------------------");

//2.1 Función para cálculo de inventario
console.log("2.1 Función para cálculo de invetario");
console.log("función que calcula el total del inventario:");
// const calcularValorTotal = (inventario) => {
//   let total = 0;
//   inventario.forEach((producto) => {
//     total += producto[1] * producto[2];
//   });

//   return total;
// };

const calcularValorTotal = (inventario) => {
  let total = inventario.reduce((acc, producto) => {
    return acc + producto[1] * producto[2];
  }, 0);

  return total;
};

console.log(`El total del inventario es: ${calcularValorTotal(inventario)}`);

// 2.2 Uso de funciones anonimas
console.log("2.2 Uso de funciones anonimas");

const ordenarPorPrecio = function (a, b) {
  return a[2] - b[2];
};

console.log(
  `inventario ordenado por precio: ${inventario.sort(ordenarPorPrecio)}`
);

console.log("--------------------------------------------------------------");

// 3.Prototype
console.log("3.Prototype;");
console.log("--------------------------------------------------------------");

function obtenerUltimoElemento() {
  return this[this.length - 1];
}

console.log(
  "En este contexto, this se refiere al array usado para invocar la función"
);

Array.prototype.getFirst = obtenerUltimoElemento;

console.log(`EL ultimo producto del inventario es: ${inventario.getFirst()}`);

// 3.2 verificación del nuevo método
console.log("3.2 verificación del nuevo método");
const arraySimple = ["play5", 10, 500];

console.log(`El ultimo elemento del array es: ${arraySimple.getFirst()}`);

console.log(`La longitud del array es: ${arraySimple.length}`);
