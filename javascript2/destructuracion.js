/*en esta destructuracion podemos ver que en un array podemos usar esta destructuracion de 
forma que el nombre de la forma de seleccionar un elemento del array y segun la serie 
en que se encuentre dicho selctor */
var otrosdias = ["dia2", "dia3"];
var numeros = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo", ...otrosdias];
numeros.concat("dia6")
const [v1, v2, v3, v4, v5, v6, v7] = numeros;
console.log(v1);
// 
/*en cambio en un objeto tenemos que destructurar el objeto de forma que cuando ya 
tengamos destructurada el obgeto, tenemos que llamar al valor justo asignando la forma en que 
se llama  */
const obj = {
    nombre: "daniel",
    apellido: "arisitizabal",
    telefono: 3122687029,
    id: "1000888414"
};

const { nombre, apellido, id, telefono } = obj;
console.log(nombre);
console.log(apellido);
console.log(id);
console.log(telefono);




function imprimir({ nombre, id }) {
    console.log(`su nombre es ${nombre} y su cedula es ${id}`)
};

imprimir(obj);

// numeros.forEach(element => {
// console.log(element)
//});

Object.entries(obj)
    .forEach(([key, value]) => {
        console.log(`${key} --- ${value}`);
    });
