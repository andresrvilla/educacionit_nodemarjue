const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Ahora se usa asi:
/*
app.use(express.urlencoded({extended: true}));
app.use(express.json());
*/

// node define algunas constantes utiles, por ejemplo:
// __dirname tiene la direccion del disco donde esta ubicado nuestro proyecto
// path.join() une todos los parametros que le pasemos formando un directorio

app.use(express.static(path.join(__dirname,"archivos")));
app.use(express.static(path.join(__dirname,"estilos")));
app.use(
    "/hojasdeestilo", //alias de url
    express.static(path.join(__dirname,"estilos")) //el directorio donde estan los archivos
    );

app.route("/formulario.html")
    .post((request,response) => {
        console.log(request.body);
        response.send("LLEGO POR POST "+request.body.nombre+" "+request.body.apellido);
    });

//Voy a definir la funcion de callback antes y pasarsela "directo"

let datos = [
    {
        "Id": 1,
        "Ciudad":"Rosario",
        "Clima": "Soleado"
    },
    {
        "Id": 2,
        "Ciudad": "Bs As",
        "Clima": "Frio"
    }
];

const obtenerDatosClima = (req,res) => {
    res.json(datos);
}

app.get("/clima",obtenerDatosClima);

const buscarClimaPorId = (id) => {
    //busque el clima por id en el listado "datos"
    return unRegistro; // Esto no funciona porque no estoy buscando
}

// /climaporid llegue un parametro "id" y con eso filtres el listado
app.get("/climaporid",(req,res) => {
    res.send(buscarClimaPorId(req.query.id));
})

app.listen(3000, () => {
    console.log("Iniciado");
});