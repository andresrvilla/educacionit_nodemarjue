const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const misDatos = require("./datos")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,"/estatico") ));

let motorhbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
});

app.engine("hbs", motorhbs.engine);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    let filtro = req.query.filtro;

    // if(filtro!=false && filtro!=null && filtro !=undefined)

    if (filtro) {
        misDatos.Buscar(filtro, (err, listaDeCompras) => {
            if (err) {
                res.redirect("/error");
            } else {
                res.render("listado", {
                    lista: listaDeCompras,
                    filtro: filtro
                });
            }
        })
    } else {
        misDatos.Todas((err, listaDeCompras) => {
            if (err) {
                res.redirect("/error");
            } else {
                res.render("listado", {
                    lista: listaDeCompras
                });
            }
        })
    }
})

//Aca podria usar el "app.route" para no repetir la url en dos lugares distintos
app.post("/", (req, res) => {
    let nombre = req.body.nombre;
    let cantidad = req.body.cantidad;

    misDatos.Agregar(nombre, cantidad, (err, datos) => {
        //Aca debería verificar si no hubo un error, y si hubo un error avisar.
        if (err) {
            console.log(err);
            res.render("error", {
                mensaje: "Hubo un error al agregar el nuevo item"
            });
        } else {
            res.redirect("/");
        }

    })
})

app.get("/comprado", (req, res) => {
    misDatos.BuscarPorId(req.query.id, (err, elemento) => {
        // Falta comprobar los errores
        elemento.Comprado = true;
        misDatos.Actualizar(elemento, (err) => {
            //Falta comprobar los errores
            res.redirect("/");
        })
    })
})

app.get("/borrar",(req,res) => {
    misDatos.Borrar(req.query.id,(err) => {
        //Falta comprobar los errores
        res.redirect("/")
    });
})

app.listen(8080);