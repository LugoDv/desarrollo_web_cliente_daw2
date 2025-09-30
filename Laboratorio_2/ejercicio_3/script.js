let date = prompt("enter the date of birth (DD/MM/AAAA)");

const regex = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/;

if (!regex.test(date)) {
  alert("Invalid date. It must be in DD/MM/YYYY format");
} else {
  const dateSplit = date.split("/");
  const day = dateSplit[0];
  const month = dateSplit[1];
  const year = dateSplit[2];
  const birthdate = new Date(`${year}-${month}-${day}`); // Formato ISO

  
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
 

alert(`You were born on ${birthdate.toLocaleDateString()}, you are ${age} years old`);
}
