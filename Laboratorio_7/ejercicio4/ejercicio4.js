const acceptedRadio = document.querySelector("#acepto_condiciones");

function loadParams() {
  const colorBack = localStorage.getItem("color_back");

  if (colorBack !== null) {
    colorBack === "red"
      ? (acceptedRadio.checked = false)
      : (acceptedRadio.checked = true);
    document.body.style.backgroundColor = colorBack;
  }
}

loadParams();

let wasChecked = false;

acceptedRadio.addEventListener("mousedown", () => {
  wasChecked = acceptedRadio.checked;
  console.log("pre estado", wasChecked);
});

acceptedRadio.addEventListener("click", () => {
  if (wasChecked) {
    acceptedRadio.checked = false;
  }
  if (acceptedRadio.checked) {
    console.log("Estado actual:", acceptedRadio.checked);
    document.body.style.backgroundColor = "green";
    localStorage.setItem("color_back", "green");
  } else {
    document.body.style.backgroundColor = "red";
    localStorage.setItem("color_back", "red");
  }
});
