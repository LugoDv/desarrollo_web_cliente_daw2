const mainElement = document.querySelector("#content");

const datosUsuario = ["fabian", 29, true];

for (let i = 0; i < datosUsuario.length; i++) {
  const p = document.createElement("p");
  p.textContent = datosUsuario[i];
  mainElement.appendChild(p);
  console.log(datosUsuario[i]);
}

const numerosElementosHtml = document.createElement("p");
numerosElementosHtml.textContent =
  "numero de elementos en la lista: " + datosUsuario.length;
mainElement.appendChild(numerosElementosHtml);

datosUsuario.push("deporte", 1.83);
console.log(`Agrego un elemento al final${datosUsuario}`);

console.log(datosUsuario.pop());
console.log(datosUsuario);

datosUsuario.unshift("primero");
console.log(datosUsuario);

console.log(datosUsuario.shift());
console.log(datosUsuario);

const arrayExtra = ["Barcelona", "6443434", "rambla"];

console.log(datosUsuario.concat(arrayExtra));

arrayNumeros = [2, 4, 1, 8, 5];

console.log(arrayNumeros.sort()); //ordena los números de menor a mayor

//se debe pasar por argumento una funcion que compare dos elementos
//dentro del array: a-b ascendent b-a descendente
const arrayDescendente = arrayNumeros.sort((a, b) => {
  return b - a;
});

console.log(arrayDescendente);

datosUsuario.splice(2, 0, "hola", "como estas");
console.log(datosUsuario);

console.log(typeof isNaN("10"));
console.log(typeof parseInt("10"));
console.log(typeof parseFloat("10.5"));
console.log(typeof String(10.5));
console.log(typeof Number("10.5"));
