let tasks = [{ id: 1, text: "Configurar nvm en fish init" }];

const $taskList = document.getElementById("task-list");
const $taskForm = document.getElementById("task-form");
const $taskInput = document.getElementById("task-input");
const $pendingCount = document.getElementById("pending-count");
const $nameDisplay = document.getElementById("username");

const getUsername = () => {
  storage = window.localStorage;
  const regex = /\d/;

  if (!storage.getItem("username")) {
    let username = prompt("Ingrese su nombre:");
    $nameDisplay.textContent = username;

    while (!regex.test(username)) {
      username = prompt("Nombre inválido. Ingrese solo letras:");
    }

    storage.setItem("username", username);
    console.log(username);
  }

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

$taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = $taskInput.value.trim();

  if (text === "") return;

  const newTask = { id: Date.now(), text: text, completed: false };
  tasks.push(newTask);
  $taskInput.value = "";
  renderTask();
});

getUsername();
renderTask();
