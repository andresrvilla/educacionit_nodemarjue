const mongoDriver = require("mongodb");
const mongoClient = mongoDriver.MongoClient;

let comprasCollection;

mongoClient.connect("mongodb://localhostx:27017", (err, clienteConectado) => {
    if (err) {
        console.log("Hubo un error al conectar al servidor");
    } else {
        let db = clienteConectado.db("listadecompras");
        comprasCollection = db.collection("compras");
    }
})

const todas = (callback) => {
    comprasCollection.find().toArray((err, datos) => {
        if (err) {
            callback("Hubo un error en la base de datos");
        } else {
            callback(null, datos);
        }
    });
}

module.exports = {
    Todas: todas
}