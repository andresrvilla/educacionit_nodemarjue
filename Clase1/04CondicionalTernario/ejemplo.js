
let caracteristicaEdad = "";
let edad = 20;

/*if(edad<18){
    caracteristicaEdad = "Menor";
}else{
    caracteristicaEdad = "Mayor";
}*/

// Condicional ternario
// condicion ? expresionCuandoEsVerdadera : expresionCuandoEsFalso;

caracteristicaEdad = edad < 18 ? "Menor" : "Mayor";

console.log("La persona es "+caracteristicaEdad);