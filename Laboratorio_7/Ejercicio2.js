const inputName = document.querySelector("#name");
const inputDate = document.querySelector("#date");
const inputCountry = document.querySelector("#country");
const sendButton = document.querySelector("#send");
const showDataDiv = document.querySelector("#show-data");

const getDataUser = () => {
  const name = inputName.value;
  const date = inputDate.value;
  const country = inputCountry.value;

  const pName = document.createElement("p");
  pName.textContent = name;

  const pDate = document.createElement("p");
  pDate.textContent = date;

  const pCountry = document.createElement("p");
  pCountry.textContent = country;

  showDataDiv.append(pName, pDate, pCountry);

  inputName.value = "";
  inputDate.value = "";
  inputCountry.value = "";
};

sendButton.addEventListener("click", getDataUser);
