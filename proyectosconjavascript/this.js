console.log(this);
console.log(window);
console.log(this === window)

this.nombre = "contexto gloval";

console.log(this.nombre);

function imprimir() {
    console.log(this.nombre);
}

imprimir();

const obj = {
    nombre: "contexto obgeto",
    imprimir: function () {
        console.log(this.nombre);
    }

}
obj.imprimir();

const obj2 = {
    nombre: "contexto obgeto 2 ",
    imprimir
}
obj2.imprimir();


const obj3 = {
    nombre: "contexto obgeto 3",
    imprimir: () => {
        console.log(this.nombre);
    }
};

obj3.imprimir();


function persona( nombre ){
    this.nombre = nombre;

return   function llamando(){
console.log(this.nombre)}




// return console.log(this.nombre)


    // this.edad = edad;
    // this.numero = numero;
    // this.color = color;
   
// return console.log("hola me llamo", this.nombre, "y tengo", this.edad, "años", "a y soy", this.color);

};

let jhon = new persona("jhon");

jhon.llamando();

let carlos  = new persona("carlos");
carlos();

// let carlos = new persona("carlos", 33, 3122322368, "negro");
// 
// let daniel = new persona("daniel", 20, 3122687029, "blanco");
// 
// persona(" daniel", 22 , 3122687029, blanco);
// 


