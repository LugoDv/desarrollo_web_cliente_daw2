
//1.Declara variables con var, let y const dentro de una función y dentro de un bloque if.

function scopeTest(){

    
    if(name==="mosca"){
        var name = "fabian";
        let secondName= "lugo";
        const age = 29;

    }
}

//2.Comprueba qué variables se pueden acceder dentro y fuera de cada bloque y
//función.

console.log(name);

//R/ solo me permite acceder a la variable de tipo VAR

//3.Intenta volver a declarar la misma variable con cada palabra clave y observa los
//errores.

var name = "hola";
let secondName = "munoz"
const age = 39;

//R/ aunque var esta declarada dentro de la funcion al volverla a declarar reemplaza el valor
// de la variable anterior, a diferencia de let y const que al no tener un 
//scope global permite declaraslas nuevamente

/*
4.aCuando usas var, la declaración se eleva, pero la asignación no.
4.b.var es global,let y const solo tienen alcance dentro de su scope
4.c.
*/

const nombre = "Fabian";
//nombre = "Carlos"; // Error: no se puede modificar el valor de la variable

const persona = {
  nombre: "Fabian",
  edad: 30
};

persona.edad = 31;
persona.ciudad = "Barcelona"; 

console.log(persona);
// Resultado: pero si permite modificar los atributos de un objeto




