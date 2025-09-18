//1.
const age = prompt("what is your age?");

//2.
if(age>17){
    alert("eres mayor de edad");
}else{
    alert("eres menor de edad");
}

//3.
for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}

//4.

let password = prompt("enter your password");

while (password!=1234) {
    
     password = prompt("password incorrect, again");
}

alert("password corrected :)")
