// const prueva ={
// fullName: function(){ 
// return this.firstName + " " +  this.lastName}
// };
// 
// const bert = {
// firstName: "daniel",
// lastName: "aristizabal"
// };
// 
// 
// const bert1 = {
// firstName: "carlos",
// lastName: "garcia "
// };
// 
// document.getElementById("demo").innerHTML = prueva.fullName.call(bert1);
// 

// const person = {
// fullName: function () {
//   return   this.firstName + " " + this.lastName;
// }
// }
// const person1 = {
// firstName: "John",
// lastName: "Doe"
// }
// const person2 = {
// firstName: "Mary",
// lastName: "Doe"
// }

// This will return "Mary Doe"


const per = {
    datos: function(city, country) {
        return this.nombre + " " + this.apellido + " " + this.id  + " " + city + country;
    }
}

const persona1 = {
    nombre: "dani",
    apellido: "aristi",
    id: 1543
}

const persona2 = {
    nombre: "carlos",
    apellido: "garcia",
    id: 383838
}

console.log(per.datos.call(persona1, "medellin ", "colombia"))