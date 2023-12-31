const per = {
    firsname: "tania", 
    lastname: "orosco",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}

const persona1 = {
    firstname: "daniel",
    lastname: "garcia"
};

const persona2 = {
    firstname: "carlos",
    lastname: "barris"
}



const newperson = per.fullname.bind(persona2);
console.log("aqui estoy yo")
console.log(newperson("laura", "herminia"));


// console.log(per.obd.apply(persona1, ["colombia", "medellin"]) );
// 
// console.log(Math.min(1,2,3,4,5,6,7,9));
// 



