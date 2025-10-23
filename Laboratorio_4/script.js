const mainElement = document.querySelector("#content");
console.log("parte 1");
const datosUsuario = ["fabian", 29, true];

for (let i = 0; i < datosUsuario.length; i++) {
  const p = document.createElement("p");
  p.textContent = datosUsuario[i];
  mainElement.appendChild(p);
  console.log(`Elemento de datosUsuario [${i}]:`, datosUsuario[i]);
}

const numerosElementosHtml = document.createElement("p");
numerosElementosHtml.textContent =
  "numero de elementos en la lista: " + datosUsuario.length;
mainElement.appendChild(numerosElementosHtml);

console.log("Parte 2: Modificación de Arrays: Añadir y Eliminar Elementos");
datosUsuario.push("deporte", 1.83);
console.log("Agrego elementos al final:", datosUsuario);

const elementoPop = datosUsuario.pop();
console.log("Elemento eliminado con pop():", elementoPop);
console.log("datosUsuario después de pop():", datosUsuario);

datosUsuario.unshift("primero");
console.log("datosUsuario después de unshift('primero'):", datosUsuario);

const elementoShift = datosUsuario.shift();
console.log("Elemento eliminado con shift():", elementoShift);
console.log("datosUsuario después de shift():", datosUsuario);

console.log("Parte 3: Métodos Avanzados de Arrays");
const arrayExtra = ["Barcelona", "6443434", "rambla"];

console.log(
  "Concat de datosUsuario con arrayExtra (no modifica los arrays originales):",
  datosUsuario.concat(arrayExtra)
);

arrayNumeros = [2, 4, 1, 8, 5];

console.log(
  "arrayNumeros.sort() (orden por defecto - como strings):",
  arrayNumeros.sort()
); //ordena los números (como strings si no se pasa compare)

//se debe pasar por argumento una funcion que compare dos elementos
//dentro del array: a-b ascendent b-a descendente
const arrayDescendente = arrayNumeros.sort((a, b) => {
  return b - a;
});

console.log(arrayDescendente);

console.log(
  "arrayNumeros ordenado de mayor a menor con compare (b - a):",
  arrayDescendente
);

datosUsuario.splice(2, 0, "hola", "como estas");
console.log(
  "datosUsuario después de splice(2, 0, 'hola', 'como estas') (inserta sin eliminar):",
  datosUsuario
);

console.log("Parte 4: Funciones Predefinidas de validación y conversión");

console.log(
  "isNaN('10') -> devuelve true si el valor no es un número (resultado):",
  isNaN("10")
);
console.log(
  "parseInt('10') -> convierte a entero (resultado):",
  parseInt("10")
);
console.log(
  "parseFloat('10.5') -> convierte a float (resultado):",
  parseFloat("10.5")
);
console.log(
  "String(10.5) -> convierte valor a cadena (resultado):",
  String(10.5)
);
console.log(
  "Number('10.5') -> convierte a número (resultado):",
  Number("10.5")
);
