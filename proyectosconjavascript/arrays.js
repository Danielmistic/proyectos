//tenemos que recordar que los arrays se formar con 
const array = [1, 2, 3, 4, 5, 10, 15];
const letras = ["a", "b", "a", "b", "b", "c"]
// console.log(array[0]);


let suma = 0;
let letr = {};
//esta funcion ,e sirve para poder iterar unproceso de celecion a lo que me refiero es que adcta cada 
//item del arreglo y lo manda a a una suma de una variable y lo podemos sumar por cada iteracion de este dicho proceso
//y asi podemos hacer un conatdor 
array.forEach(item => {
    suma += item
    // console.log( 'a[' + index + ']=' + item);
});
console.log(suma);


//este codigo nos ayuda para poder contar las similitudes de un arreglo y poder saber 
//cuantas se encuentra y  asi ase un ciclo hasta el ultimma propiedad del array y irle sumando 1 hasta que se cuentes cuantos 
//similitudes hay en ese arreglo valgame la redundancia.
letras.forEach( item => {
    if ( letr[item] ) {
        letr[item]++;
    } else {
        letr[item] = 1;
    }
});
 console.log(letr);
// 

// function escibiendonumero (item, index, _arr) {
// console.log('a[' + index  + 'n] = ' + item);
// }


//este metodo nos ayuda para poder quitarle al ultimo dato del array
const personas = ["peter", "lola", "piña", "aron"];
personas.pop();
console.log(personas)

//este metodo nos ayudará para poder sumarle un valor al final del array

const otraper= ["mita", "miss", "cass", "cors"];
console.log(otraper.push("carla"));
console.log(otraper);


//este elemento nos ayudará para poder eliminar el primer elemento de nuestro arreglo
var verto = ["tom", "carl", "tito", "posta"];
console.log(verto.shift());
console.log(verto);

//al principio este codigo al principio cuenta los caracteres que tenemos en el arreglo
//y despues poniendole un parametro a el metodo unshift("paramether") este sumara ese parametro al inicio de la cadena,
//tambien podemos ver que el metodo .length nos ayuda hacer lo mismo que unshift
var poesto = ["one", "two", "three", "four"];
console.log(poesto.unshift("zero"));
console.log(poesto);
poesto[poesto.length] = "anything";
console.log(poesto);

console.log();
console.log();

//este codigo ayudara para sacar un elemento de un array
var comose = ["bueno", "bonito", "barato", "que tal"];
console.log(comose);
delete comose[0]
console.log(comose)

console.log();
console.log();


// el metodo flat nos ayuda oara poder desarmar un arrray que esta anidado en oto array
// tambien se deve saber que os parametros que resive este metodo son las veses qie vamos a entrar a un array que esta dentro 
// de otro array y asi sucesivamente}
var arrs = [ [1, 2, 3], [4, 5, 6], [7, 8, 9, 10] ];
console.log(arrs);
var vhock = arrs.flat();
console.log(vhock);

console.log();
console.log();

//este metodo nos ayudara para poder agregar alfun elementi o nuestro array
// pues viendo que elprimer parametro que se da es un nuemero sera la posicion en la que se encuentra 
// y el segundo parametro son los elementos que se removeran de el array y ya los 
//elementos que se escivan despues de estos seran el remplaso o en la adicion de este arrray en especifico 
var toco = ["que", " no", "soy", "capaz", "de"];
console.log(toco);
console.log(toco.splice(3, 2, "como", "que"));

console.log(toco);

