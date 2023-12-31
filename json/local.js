var daniel = {
      apellido: "garcia",
      edad: "23",
      estidios: "bachiller",
      profesion: "developer"
};

var danielstr = JSON.stringify(daniel);
localStorage.setItem("gorta", danielstr)
var danielstr2 = localStorage.getItem("gorta");
alert(danielstr2);

