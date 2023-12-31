const objs = [
    {
        modelo: "2020",
        nombre: "mbw",
        costo: 28000000
    },

    {
        modelo: "2020",
        nombre: "mbw",
        costo: 28000000
    },
    {
        modelo: "2020",
        nombre: "mbw",
        costo: 28000000
    }
];

// const getdatos = () => {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// resolve(objs);
// }, 2000);
// 
// })
// }
// 
// async function getdat() {
// const pdatos = await getdatos();
// console.log(pdatos);
// }
// 
// getdat();

// gatdatos().then((objs) => console.log(objs))


/*en esta ocacion lo que hacemos es que tenemos un string de obgetos de algunos carros lo que 
intentamos hacer es que vamos hacer una promesa para ver como se hacen. creamos una constante 
que aloja una funcion que es una arrray finction despues vemos que devolvemos la promesa 
aqui podemos ver que la promesa tiene  dos parametros resolve y rejet,
despues vemos que hacemos la funcion setTimeout para que podamos arrojar el mensage que dure un
tiempo determonado como vemos que lo lanza en milicegundos. dentro de la function podemos ver que 
tenemos nuestro parametro resolve para poder mandar el mesage cunado llamemos la funcioon. que en 
este caso es getdatos, pero ahi no acaba todo para que la llamada a la function funcione 
tememos que pasarle la funtion then para pasaerle el obgeto y aun asi pasarlr una arroudn 
funtion que mande por consola el obgeto en cuestion */


const personas = [
    {
        nombre: "daniel",
        apellido: "Aristizabal",
        edad: 22
    },
    {
        nombre: "julian",
        apellido: "lopez",
        edad: 18
    },
    {
        nombre: "carlos",
        apellido: "garcía",
        edad: 34
    }
];

const per = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(personas)
        }, Math.random() * 1000);
    })
};

per()
    .then((obj) => {
        console.log(obj[0]);
    })
per()
    .then((obj) => {
        console.log(obj[1]);
    })
per()
    .then((obj) => {
        console.log(obj[2]);
    })






// async  function dardata(){
    // const person = await per();
    // console.log(person);
// };
// dardata();
