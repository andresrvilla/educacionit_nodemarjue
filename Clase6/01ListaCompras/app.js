const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const misDatos = require("./datos")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

let motorhbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
});

app.engine("hbs",motorhbs.engine);
app.set("view engine","hbs");

app.get("/",(req,res) => {
    misDatos.Todas((err,listaDeCompras) => {
        if(err){
            res.redirect("/error");
        }else{
            res.render("listado", {
                lista: listaDeCompras
            });
        }
    })
    
})

app.listen(8080);