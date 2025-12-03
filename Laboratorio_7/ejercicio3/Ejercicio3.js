const newIl = document.createElement("li");
const parrafo = document.querySelector("#mensaje");
const button = document.querySelector("#addIl");

button.addEventListener("click", () => {
  newIl.textContent = "Hola";

  parrafo.appendChild(newIl);
});
