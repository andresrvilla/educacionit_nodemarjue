const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");

// las peticiones http://localhost:4000/static van a devolver los archivos estaticos
// de la carpeta fisica "static"
app.use("/static", express.static(path.join(__dirname, "static")));

const motorhbs = exphbs.create({
    defaultLayout: "base",
    extname: ".hbs"
});

app.engine(".hbs", motorhbs.engine);
app.set("view engine", ".hbs");

app.get("/", (req,res) => {
    res.render("inicio", {
        nombreSitio: "Andrés Villa"
    });
});

app.listen(4000, () => console.log("Se inicio el servidor correctamente"));