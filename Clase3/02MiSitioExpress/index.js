const express = require("express");
const fs = require("fs");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Ahora se usa asi:
/*
app.use(express.urlencoded({extended: true}));
app.use(express.json());
*/

app.get("/", (request,response) => {
    fs.readFile("./archivos/index.html","utf-8",(err,datos) => {
        if(err) {
            response.status(404).send("Ha ocurrido un error al cargar el documento");
        }else{
            response.send(datos);
        }
    });
});

app.route("/formulario")
    .get((request,response) => {

        // Para leer los parametros del querystring puedo hacer:
        //console.log("Nombre enviado: "+request.query.nombre);
        //console.log("Apellido enviado: "+request.query.apellido);

        fs.readFile("./archivos/formulario.html","utf-8", (err,datos) => {
            if(err) {
                response.status(404).send("Ha ocurrido un error al cargar el documento");
            }else{
                response.send(datos);
            }
        });
    })
    .post((request,response) => {
        console.log(request.body);
        response.send("LLEGO POR POST "+request.body.nombre+" "+request.body.apellido);
    });

app.get("/clima",(req,res) => {
    let datos = [
        {
            "Ciudad":"Rosario",
            "Clima": "Soleado"
        },
        {
            "Ciudad": "Bs As",
            "Clima": "Frio"
        }
    ];

    res.json(datos);
});

app.listen(3000, () => {
    console.log("Iniciado");
});