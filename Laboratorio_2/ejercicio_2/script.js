const numberRadom = Math.floor(Math.random() * 100) + 1;
let count = 0;
let numberClient = prompt("enter number");

while (count !== 7) {
  console.log("numero ramdom" + numberRadom);
  console.log("numero cliente" + numberClient);

  if (numberRadom == numberClient) {
    count++;
    console.log("entra");
    alert("are you winner!!! trieds: " + count);

    break;
  }

  if (numberRadom > numberClient) {
    numberClient = prompt("the number is greater  ");
  } else {
    numberClient = prompt("the number is less ");
  }

  count++;
}


console.log(numberRadom);
