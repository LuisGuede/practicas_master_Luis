// se escribe de arrova a bajo y se lle de izquirda a derecha.

// tipos de comentarios: normal y de bloque.

// una bariable es una cajita.

// las variables son: var, const y let

// variables (var):
var nombreUsuario = "Mike";

// ejemplo de reasignar:
nombreUsuario = "pulgarcito" 

console.log(nombreUsuario);

// cundo uso const (la cual es un variable) no puedo usar var por que dara error.

// palabras reservadas:
// var, const, function, event, for..

// variables :
var nombreUsuario = "Mike";

// PRIMITIVOS:
// INMUTABLE -> Capacidad de cambiar el valor interno de una variable sin reasignarla
// string:
var userName= "miki w34253453";
userSurname = "pepiño";

var userName= "miki 123" + "" + "otroNombre"
                        // "" es un espacio

var userName= "miki";
userName = "wasowki";

// var message = "Mi nombre es" + userName + "" + userSurname;
message = `Mi nombre es ${userName} ${userSurname}`; 
// la del $ es mejor, es mas limpia

// PROPIEDADES:
message.lenght


// METODOS:
message = message.replace("miki", "Albert");
console.log(message);

// NUMBER
var numberAmigos = 26753;
console.log(numberAmigos)


// BOOLEAN
var isJavascriptTheTrueHapiness = true;



// llaves y conjuto pares y valor

const mike = {
    nombre: "mike",
    apellido: "wasowski",
    amigos: 230,
    aficiones: [
    "cazar gamusnos de noche", 
    "hacer musica"
    ],
    isUnPocoLoco: true,
}

console.log(mike.aficiones);


// las arry tienen un principio y un fin 
// ejemplo const cordenadas = [1, 2, 3, 4, 5];

const flores = [
"margaritas", 
"petunias", 
"rosas",
{
    petalos: "me gustan",
    raices: "profundas y solidas"
}
];

// NO PRIMITIVOS: // objetos y arrays(son mutables)