let tasks = [{ id: 1, text: "Configurar nvm en fish init" }];

const frases = [
  ["motivacion", "Nunca te rindas, los grandes logros requieren tiempo."],
  ["motivacion", "Cada dia es una nueva oportunidad para mejorar."],
  ["disciplina", "La disciplina es el puente entre metas y logros."],
  [
    "disciplina",
    "Haz hoy lo que otros no haran para vivir manana lo que otros no podran.",
  ],
  ["enfoque", "Concentra toda tu energia en lo que esta dentro de tu control."],
  ["enfoque", "Un paso a la vez es suficiente para llegar lejos."],
  [
    "resiliencia",
    "Las dificultades preparan a personas ordinarias para destinos extraordinarios.",
  ],
  ["resiliencia", "Caer es inevitable, levantarse es una decision."],
  [
    "exito",
    "El exito no es el final, el fracaso no es fatal, lo que cuenta es el coraje de continuar.",
  ],
  ["exito", "No cuentes los dias, haz que los dias cuenten."],
];

const $quoteCategory = document.getElementById("quote-category");
const $quoteText = document.getElementById("quote-text");
const $quoteCard = document.getElementById("quote-card");
const $btnFrase = document.querySelector(".btn-frase");
const $taskList = document.getElementById("task-list");
const $taskForm = document.getElementById("task-form");
const $taskInput = document.getElementById("task-input");
const $pendingCount = document.getElementById("pending-count");
const $nameDisplay = document.getElementById("username");
const $clock = document.getElementById("live-clock");
const $infoWindow = document.getElementById("resize-info");
const $modeToggle = document.getElementById("toggle-mode");

const getRandomQuote = () => {
  const random = Math.floor(Math.random() * frases.length);
  const [categoria, texto] = frases[random];

  $quoteCategory.textContent = `// ${categoria}`;
  $quoteText.textContent = texto;

  $quoteCard.classList.remove("quote-animate");
  void $quoteCard.offsetWidth;
  $quoteCard.classList.add("quote-animate");
};

const updateClock = () => {
  const now = new Date();
  let timeNow = now.toLocaleTimeString();

  $clock.textContent = timeNow;
  // console.log(timeNow);
};

const getUsername = () => {
  let storage = window.localStorage;
  const regex = /^[a-zA-Z]+$/;

  if (!storage.getItem("username")) {
    let username = prompt("Ingrese su nombre:");

    while (!regex.test(username)) {
      username = prompt("Nombre inválido. Ingrese solo letras:");
    }

    storage.setItem("username", username);
    console.log(username);
  }

  if (!storage.getItem("colorSchema")) {
    storage.setItem("colorSchema", "dark");
  }

  if (storage.getItem("colorSchema") === "light") {
    document.body.classList.add("light");
  }
  $modeToggle.textContent = storage.getItem("colorSchema") === "light" ? "LIGHT" : "DARK";
  $nameDisplay.textContent = storage.getItem("username");
};

const renderTask = () => {
  $taskList.innerHTML = "";

  tasks.forEach((task) => {
    const $taskItem = document.createElement("li");
    $taskItem.className = "task-item";
    $taskItem.setAttribute("data-id", task.id);
    $taskItem.textContent = task.text;

    $taskItem.addEventListener("click", () => {
      console.log(`${task.text}`);
    });

    const $deleteButton = document.createElement("button");
    $deleteButton.className = "btn-add btn-delete";
    $deleteButton.textContent = "DEL";

    $deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();

      $taskItem.remove();

      tasks = tasks.filter((t) => t.id !== task.id);
    });

    $taskItem.appendChild($deleteButton);
    $taskList.appendChild($taskItem);
  });
};

$modeToggle.addEventListener("click", () => {
  let result = document.body.classList.toggle("light");

  $modeToggle.textContent = result ? "LIGHT" : "DARK";

  localStorage.setItem("colorSchema", result ? "light" : "dark");
});

$taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = $taskInput.value.trim();

  if (text === "") return;

  const newTask = { id: Date.now(), text: text };
  tasks.push(newTask);
  $taskInput.value = "";
  renderTask();
});

window.addEventListener("resize", () => {
  let displayInfo = `Ancho: ${window.innerWidth}px, Alto: ${window.innerHeight}px`;

  $infoWindow.textContent = displayInfo;
});

$btnFrase.addEventListener("click", getRandomQuote);

getUsername();

setInterval(updateClock, 1000);

renderTask();
