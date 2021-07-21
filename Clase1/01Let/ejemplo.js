var miVariable = "texto";
console.log(miVariable);

let miVariableLet = "otroTexto";
console.log(miVariableLet);

function varTest(){
    var a = 100;
    if(true){
        var a = 99;
        console.log(a);
    }
    console.log(a);
}

varTest();

function letTest(){
    let a = 100;
    if(true){
        let a = 99;
        console.log(a);
    }
    console.log(a);
}

letTest();


var repetida = "Es var";
var repetida = "Es var repetida";

console.log(repetida);

let repetidaLet ="Es let";
//No puedo declararla de nuevo porque el motor me devuelve un error;
//let repetidaLet = "Es repetida Let";

console.log(repetidaLet);


function ejemploDefinicionVar(){
    console.log(varEjemploDefinicion);
    var varEjemploDefinicion = "Hola";
}

/*
El motor lo interpreta asi:
function ejemploDefinicionVar(){
    var varEjemploDefinicion;

    console.log(varEjemploDefinicion);
    var varEjemploDefinicion = "Hola";
}
*/

ejemploDefinicionVar();

// En las variables "let" no interpreta la declaración de la variable al inicio del bloque
function ejemploDefinicionLet(){
    console.log(letEjemploDefinicion);
    let letEjemploDefinicion = "Hola";
}

ejemploDefinicionLet();