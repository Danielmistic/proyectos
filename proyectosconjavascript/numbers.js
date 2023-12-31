
//este metodo nos ayuda para que podamos combiar un tipo de doto numerico a un string
var number = "hola";
var otronumber= number.toString();
console.log(typeof(number));
console.log(typeof(otronumber));

//este metodo no se quedo muy claro dejar pendiente;

var numero1 = 3;
var espo = numero1.toExponential(2)
console.log(espo);

//este metodo nos ayudara para que podamos especificar cuantos decimales queremos wue se muestre
console.log(numero1.toFixed(2));


//este metodo nos ayudará para especificar cuantos desimales pasarle 
var prov = 3.1416;
var otprov = prov.toPrecision(5);
console.log(otprov);