

// en el caso de los obgetos en el codigo podemos ver que esta es la sintasis
const myObjet = {
    name: "jhon",
    lastname: "due",
    age: 55,
    eyescolor: "blue",

    contactos: [
        "jhon@gmail.com", 3216607929, "http://www.facebook.com",
    ],

    //en esta funcion hicimos que la palabra clave this
    //nos escojiera el valor de los valores de la constante del
    // u objeto que estaba alojada en este
    fullname: function (valu1) {
        return myObjet.name + " " + myObjet.lastname + " " + myObjet.age
    },

    present: function() {
        console.log('hola me llamo ' + (this.name),  'y tengo ' + (this.age) + " años")
  },

}
// console.log(myObjet.present())
// console.log(myObjet.present())
// 

// console.log(myObjet.present())
// console.log(myObjet.contactos[0])
// document.getElementById("demo").innerHTML = myObjet.fullname();
//
// document.write(myObjet.contactos[0]);
//
// const bisicleta = {
    // pedal: "rotar",
    // silin: "sentarse",
    // manubrio: "manejar",
// }

