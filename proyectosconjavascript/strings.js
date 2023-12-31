// este metodo .lenghth nos ayuda a saver el numero de  caracteres de el string que estamos usando;
var srt = "esto es un estao mas";
console.log(srt.length);
// este metodo nos ayyuda paa que podamos cortar un pedacito de codigo de texto y guardarlo en otra variable;
//l cosa va en que el primer parametro cuenta la iubicacion del caracter que necesitamos y el segundo valor es para que podamos 
//darle fin a esa ubicacion, y asi guardar la variable que se nesecitan 
//tenemos que tener en cuenta que los caracteres se cuentan desde el primer parametro del string y se cuenta desde cero 
var nsrt = "otro pedaso de estring";
console.log(nsrt.slice(4, 11))
//este metodo es muy similara a slice(), pero la diferencia es que no acepta numeros negativos
//en el caro de slice, si acepta numeros negativos en los parametros pero este empirsa a contar desde atras acia el comienso 
var substrin = "esto es algo nuevo";
console.log(substrin.substring(7, 12));

// este metodo nos ayuda para cambier el caracter  de un string 
// pero trabaja de forma que toma el primer caracter que encu
var cambi = "apple, banana, kiwi"
document.write(cambi.replace("banana", "orange"));


//aqui vemos una funcionn que nos ayuda para que pidamos cambiar todos los caracteres que sean 
// iguales y cambierlos todos por otro que nosotros elijamos en el segundo parametro 
function cambio(){
var cambiotodo = "me gustan los perros pero me gustan mas las tortugas, pero no le gusta a las tortugas pero a los perros si le gusto ";
 document.getElementById("camb").innerHTML =
  cambiotodo.replaceAll("Perros", "gatos");
}

//este metodo nos ayuda para que podamos cambiar texto de minuscula a mayuscula
var cambiodel = "esto es un texto en minuscula que se convierte en mayuscula";
console.log(cambiodel.toUpperCase());


var cambiodeltext = "ESTO ES UN TEXTO QUE CAMABIA DE MAYUSCULA A MINUSCULA"
console.log( cambiodeltext.toLowerCase());

//este codigo nos ayuda para poder concardenar dos vlores 
let saludo1 = "hello";
  let saludo2 = "how are you?";
var result = saludo1.concat(saludo2);
console.log( result);

console.log(saludo1 +" " +saludo2);


// el metodo ,trim(); nos ayuda para poder quitar los campos
//espacion es blanco de una cadena de texto
//si queremos que sea en ambos lados usammos el shorhand trim();
// pero si lo queremos en un lado especifico colocamos segin el caso 
// ya sea trimstart(); ó trimend();
let valordeltrim = "       hola esto es un nuevo  strig";
let valorandostrim = valordeltrim.trim();

let conos = valordeltrim.length;
let cops = valorandostrim.length;

console.log(conos);
console.log(cops);

// este metodo nos ayuda para rellenar la posiciones de un numero sabiendo 
//que es primer parametro son las posiciones que van a ir en la cadena de texto
// segundo parametro es los numeros en los que se va relllenar esta cadena de texto
// tambien esta padende, que lo que hace en este caso es rellenar los dnumeros pero del final 
// hacia adelante 
let pads = "1542";
let otropad = pads.padStart(7, 0);
console.log(otropad);


//este codigo nos ayuda para que podamos extraer un caracter de un cadena de texto
let chatart = "HELLO WORD";
let otrochart = chatart.charAt(1);

console.log(otrochart);


//este metodo nos ayua para convertir una cadena te texto en un array 
var etsolargo = " hola mi nombre es daniel quiero que sepan nada"
var cambito = etsolargo.split(" ",);
console.log(cambito);




