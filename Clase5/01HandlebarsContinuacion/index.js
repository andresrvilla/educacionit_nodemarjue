const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// las peticiones http://localhost:4000/static van a devolver los archivos estaticos
// de la carpeta fisica "static"
app.use("/static", express.static(path.join(__dirname, "static")));

const motorhbs = exphbs.create({
    defaultLayout: "base",
    extname: ".hbs",
    helpers: {
        footer: () => {
            return new handlebars.SafeString("<b>Fin de la pagina</b>");
        },
        titulo: (texto) => {
            return new handlebars.SafeString("<h1>"+texto+"</h1>")
        }
    }
});

app.engine(".hbs", motorhbs.engine);
app.set("view engine", ".hbs");

// Variables globales

let usuarios = [
    {
        nombreUsuario: "RAV",
        nombreCompleto: "Andrés Villa",
        password: "123" //OJO! No esta bien poner datos sensibles aca y encima sin encriptar. Es solo con fines didacticos
    },
    {
        nombreUsuario: "POC",
        nombreCompleto: "Pablo Omar Caceres",
        password: "1234" //OJO! No esta bien poner datos sensibles aca y encima sin encriptar. Es solo con fines didacticos
    }
]

app.get("/", (req, res) => {

    let nombreDeUsuario ;

    res.render("inicio", {
        nombreSitio: "Andrés Villa",
        usuario: nombreDeUsuario,
        estaConectado: nombreDeUsuario != undefined
    });
});

app.get("/usuarios", (req, res) => {
    res.render("usuarios",
        {
            listaDeUsuarios: usuarios
        });
});

app.route("/nuevousuario")
    .get((req, res) => res.render("nuevoUsuario"))
    .post((req, res) => {
        let nuevoUsuario = {
            nombreUsuario: req.body.nombreUsuario,
            nombreCompleto: req.body.nombreCompleto,
            password: req.body.pwd
        }

        usuarios.push(nuevoUsuario);
        res.redirect("/usuarios");
    });

app.get("/notas", (req, res) => {
    let listadoAlumnos = [
        {
            "codigo": 1,
            "apellido": "Villa",
            "nombre": "Andres",
            "notas": [
                1,
                2,
                3,
                4
            ]
        },
        {
            "codigo": 2,
            "apellido": "Suarez",
            "nombre": "Enrique",
            "notas": [
                1,
                2,
                3,
                4
            ]
        }
    ];

    res.render("notas",{
        alumnos: listadoAlumnos
    })
})

app.listen(4000, () => console.log("Se inicio el servidor correctamente"));