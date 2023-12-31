//esto nos sirve para que podaamos saber en que posicion esta un elemento de un string
//teniendo en cuanta tambien que cuando el metodo encuantra el codigo que necesitamos 
//me lansa a donde quiera que queramos el codigo la posicion de la primer latra del string
var esto = "hola como estas, yo estoy bien";
var veamos = esto.indexOf("estas");
console.log(veamos);

const lenguages = ["javascript", "python", "java", "c", "c++", "c#", "python"];
console.log(lenguages.indexOf("javascript"));


//el metodo lastIndexOf nos ayuda para poder saber en que posición esta el ultimo
//caracter en el cual se encuentra en el array

console.log(lenguages.lastIndexOf("python"));

//pues lo que desimos de search es muy parecido a indexOf
var texto = "esto no se como se llama pero entiendo";
var resuly = texto.search("se");
console.log(resuly);

//esto nos ayuda para devolver todo lo que le dictemos deacuerdo a los parametros 
//algo importante si no se usa el lacolizador universal /g; no se hace de forma gloval y solo arrojaría el primer caracter
var textoin= "This is 56 Parragraft And I Have a problem"
var parametro = /[A-Z]/g;
var otrospar = /[0-9]/g;
console.log(textoin.match(parametro));
console.log(textoin.match(otrospar));


//este metodo nos ayudara para que podamos ver si el primer caracter 
//de un string es igual al que le pasammos por parametro 
//y si le ponemos la posicion (string,  5) al parametro empesara a buscar en dicha posicion si la coincidencia es la misma
var comienzo = "hola me llamo daniel y soy aspirante a programación";
console.log(comienzo.startsWith("hola"));

//y est metodo nos ayuda para que podamos ver si el ultimo caracter de un detodo es de esta forma
// y se cuenta hasta el ultimo caracter del string para saver la ubicacion de este forma

var termina = "hola esto es asi un nuevo estrig y ternima asi";
console.log(termina.endsWith("asi", 16));



//pues la sintaxis de esto nos ayuda para enterderse como una concadenación
var namer = "carlos";
var lastname= "garcía";
var conj = `hola ${namer}, ${lastname}`

console.log(conj);


var price = 10;
var VAT = 0.25;
var total = `total ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

