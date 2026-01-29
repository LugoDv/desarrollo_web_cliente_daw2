const section = document.getElementById("first");
const div = document.getElementById("second");
const button = document.getElementById("third");

section.addEventListener("click", () => {
  console.log("click en section");
});

div.addEventListener("click", () => {
  console.log("click en div");
});

button.addEventListener("click", (e) => {
  e.stopPropagation(); //ejercicio 3
  console.log("click en button");
});
