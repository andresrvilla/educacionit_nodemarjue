const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
mongoose.connect("mongodb://localhost/listadecomprasdos")

let schemaListaCompras = new Schema({
    Nombre: {
        type: String,
        required: true
    },
    Cantidad: {
        type: Number,
        required: true
    },
    Comprado: {
        type: Boolean,
        required: true
    }
})

let listaModel = new Model("Producto", schemaListaCompras);

const todas = (callback) => {
    listaModel.find().lean().exec(callback);
}

const buscar = (filtro,callback) => {

}

module.exports = {
    Todas: todas,
    Buscar: buscar
}