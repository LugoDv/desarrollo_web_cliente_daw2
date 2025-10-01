console.log(window.innerHeight, window.innerWidth);

const openButton = document.querySelector("#open");
const userH2 = document.querySelector("#user");


openButton.addEventListener("click", () => {
  const ventana = window.open("https://www.google.com");

  console.log(ventana);
  if (confirm("do you like close the window")) {
    ventana.close();
  }
});

function load() {
  alert("Welcome");
}

function loadNameUser() {
  let name = prompt("your name");

  userH2.textContent = name;
}

load();
loadNameUser();
