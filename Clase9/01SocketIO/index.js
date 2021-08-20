const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

var motor = exphbs.create({
    defaultLayout: "principal",
    extname: "hbs"
});

app.engine("hbs", motor.engine);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("chat");
});

let server = app.listen(3000, () => {
    console.log("Iniciado en el puerto 3000");
})

const io = require("socket.io");
const ioServer = io(server);

let clientesConectados = [];

ioServer.on("connection", (socketCliente) => {

    console.log("Se conecto un cliente");
    clientesConectados.push(socketCliente);
    socketCliente.emit("chat message", "Bienvenido a la sala de chat. Hay " + clientesConectados.length + " personas conectadas");
    //console.log(socketCliente);

    socketCliente.on("disconnect", function () {
        //quitar de clientes conectados
    })

    socketCliente.on("chat message", (msg) => {
        console.log("Recibi el mensaje "+msg);
        ioServer.emit("chat message", msg);
    })
})