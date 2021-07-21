/*function obtenerSaludo(nombre) {
    var saludo = "Hola "+ nombre;
    return saludo;
}*/

/*
const obtenerSaludo = (nombre) => {
    let saludo = "Hola "+nombre;
    return saludo;
}
*/

const obtenerSaludo = nombre => "Hola " + nombre;

const obtenerSaludoCompleto = (nombre, apellido) => "Hola " + nombre + " " + apellido;

console.log(obtenerSaludo("Andres"));