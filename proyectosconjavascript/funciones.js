// alert("que tal como estas...")
// let nemer = 3;
// let verdader = true;
// let cars = ["bmw","audi","ford"];
// const namer = "sara";
// var cliente = {
    // name :"daniel",
    // edad :"22",
    // altura:"180",
    // talla:"42",
// };
// 
// document.getElementById("demo").innerHTML = namer;
// document.getElementById("demo").style.fontSize = "100px";
// document.getElementById("demo").style.color ="red";
// 
// console.log(typeof namer);
// console.log(typeof cars);
// console.log(typeof verdader);
// console.log(typeof nemer);
// console.log( typeof cliente);
// console.log(cars[1]);
// 
// function saludo(item1){
    // document.write("hola como estas " + item1);
// }
// saludo("daniel");
// 
// function suma(numero1, numero2) {
    // var numero1 = numero1;
    // var numero2 = numero2;
// 
    // return numero1 + numero2;
// };
//  
// console.log( suma(10,10) )
// 
// document.write( suma(10,10));
// 
// function numeromayor(value1, value2){
    // if (value1 > value2){
        // return value1
    // } 
    //  else {
        // return value2
    // } 
        // return "it s the same number"
    // 
// };
// 
// document.write( "el numero mayor es el " + numeromayor(1,4) )
// 

//este codigo es para hacer sumas 

//  var sumar = function (value1, value2) {
    // var numero1 = parseFloat( document.getElementById("value1").value )
    // var numero2 = parseFloat( document.getElementById("value2").value )

    // var result = numero1 + numero2;
    // return result;
// }


// este codigo es para hacer mutiplicaciones 

// function multiplicando(Numero1, Numero2) {
//    var Numero1 = document.getElementById("value1").value;
//    var Numero2 = document.getElementById("value2").value;
// 
// var resultado = Numero1 * Numero2;
// return resultado;
//}
// 
// console.log( multiplicando(10, 2) );
// 
// este codigo hace diviciones

// function dividiendo(parameter1, paramter2) {
// let Numero1 = document.getElementById("value1").value;
// let Numero2 = document.getElementById("value2").value;

// let resultado = Numero1 / Numero2;
// return resultado;
// }

function restar(numero1, numero2) {
    let num1 = document.getElementById("value1").value;
    let num2 = document.getElementById("value2").value;

    let resultado = num1 - num2;
    return resultado;
}