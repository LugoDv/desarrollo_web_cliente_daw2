const button = document.getElementById("btn-multi");
const body = document.getElementById("main-dody");
const textArea = document.getElementById("campo-text");
const infoPantalla = document.getElementById("info-pantalla");

// Fase 1: Eventos Básico
function message1() {
  alert("Mensaje 1");
}
function message2() {
  alert("Mensaje 2");
}

button.addEventListener("click", message1);
button.addEventListener("click", message2);

// Fase 2: Eventos de Teclado (8 puntos)
textArea.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(e.type);
  // 3. Restricción de caracteres con preventDefault() (4 puntos)

  if (!isNaN(e.key)) {
    e.preventDefault();
  } else {
    infoPantalla.textContent = `presionaste ${e.key}`;
  }
});
