var id = Symbol("hola");
var id2 = "hola";
// console.log(id === id2);

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");


const persona = {
[NOMBRE]: "daniel"
}
console.log(persona);

 persona.NOMBRE= "Daniel Aristizabal García";
 
//persona.NOMBRE = Symbol("Daniel Aristizabal");
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function(){
    console.log("hola");
};

persona[SALUDAR]();

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

var tambien = next(persona);
console.log(tambien);