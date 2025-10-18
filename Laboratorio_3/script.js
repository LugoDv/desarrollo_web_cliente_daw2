let reload = 0;
const formUser = document.querySelector("#form-initial");
const body = document.querySelector("body");
const user = document.querySelector(".userName");
const reloadSpan = document.querySelector("#reload-count");
const inputColor = document.querySelector("#color");
const titleLastVisit = document.querySelector("h3");
const openModalBtn = document.querySelector("#open-modal");

//Gestión de cookies
const lastVisited = () => {
  let now = new Date();

  if (!document.cookie.includes("lastVisit")) {
    document.cookie = "lastVisit=" + now.toUTCString() + "; path=/";

    console.log(document.cookie);
  }

  document.cookie = `lastVisit=${now.toUTCString()}; path=/`;
};

const getCookie = (name) => {
  const value = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(name + "="));
  return value;
};

//contador de recargas de la pagina
const reloadsCount = () => {
  reload = sessionStorage.getItem("reload")
    ? parseInt(sessionStorage.getItem("reload"))
    : 0;

  sessionStorage.setItem("reload", ++reload);

  console.log("summa countador", reload);
  return reload;
};

//Manipulaciòn de cadenas
const capitalize = (name) => {
  console.log(name.at(0).toUpperCase() + name.slice(1).toLowerCase());
};

//valido el nombre
const validateName = (name) => {
  // Validación: Mayúscula inicial, seguir con minúsculas/números, mínimo 5 caracteres
  const nameRegex = /^[A-Z][a-z0-9]{4,}$/;

  if (!nameRegex.test(name)) {
    alert(
      "Invalid name. Must start with uppercase, followed by lowercase/numbers, minimum 5 characters."
    );
    return;
  }

  return name;
};
//eventos de carga load, DOMContentLoaded,beforeunload
window.addEventListener("DOMContentLoaded", () => {
  // console.log('La página y todos sus recursos se han cargado.');

  const lastVisit = getCookie("lastVisit") ?? "Welcomer";

  lastVisited();

  titleLastVisit.textContent = `${lastVisit}`;
  body.style.setProperty("background-color", localStorage.getItem("color"));
  user.textContent = this.localStorage.getItem("name");

  reloadSpan.textContent = `Load session: ${reloadsCount()}`;

  // alert(lastVisit)
});

formUser.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formUser);
  const name = validateName(formData.get("name"));
  const color = formData.get("color");

  body.style.setProperty("background-color", color);
  user.textContent = name;
  inputColor.value = color;

  capitalize(name);
  // console.log(color, name)

  localStorage.setItem("color", color);
  localStorage.setItem("name", name);
  sessionStorage.setItem("reload", reload);

  reloadSpan.textContent = reloadsCount();
});

//modulo 3 comunicacion entre ventanas

// sonWindow.opener.postMessage('Hello from the parent window!',);

//el padre y el hijo pueden escuchar el mismo evento Message event
window.addEventListener("message", (event) => {
  // Validar origen
  if (event.origin !== window.location.origin) {
    console.warn("Mensaje de origen no confiable:", event.origin);
    return;
  }

  // Validar que el mensaje tenga la estructura esperada
  if (!event.data || typeof event.data !== "object" || !event.data.nickname) {
    console.warn("Mensaje sin formato válido:", event.data);
    return;
  }

  console.log("Mensaje recibido del hijo:", event.data);

  const validatedName = validateName(event.data.nickname);

  if (!validatedName) {
    return;
  }

  user.textContent = validatedName;
  localStorage.setItem("name", validatedName);
  formUser.querySelector("#name").value = "";
  alert(`Nickname "${validatedName}" received successfully!`);
});

openModalBtn.addEventListener("click", () => {
  const sonWindow = window.open("hijo.html", "Modal", "width=400,height=400");

  console.log(sonWindow);
});

// const receiveNickname = (event) => {
//   if (event.origin !== window.location.origin) {
//     console.warn("Mensaje de origen no confiable:", event.origin);
//     return;
//   }

//   console.log("Mensaje recibido del hijo:", event.data);
//   user.textContent = event.data;
// };
