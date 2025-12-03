// Ejercicio 1: Creacion de Array a partir de Cookies
document.cookie = "usuario=ana;";
document.cookie = "tema=oscuro;";
document.cookie = "idioma=es;";

console.log("muestro un array de las cookies");
const cookies = document.cookie.split(";");
console.log("cookies", cookies);
