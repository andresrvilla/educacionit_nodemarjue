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

const buscar = (filtro, callback) => {
    let pattern = new RegExp(".*" + filtro + ".*", "ig");
    listaModel.find({ "Nombre": pattern }).lean().exec(callback);
}

const agregar = (nombre, cantidad, callback) => {
    let nuevoItem = new listaModel({ "Nombre": nombre, "Cantidad": cantidad, "Comprado": false });
    nuevoItem.save(callback);
}

const buscarPorId = (id,callback) => {
    listaModel.findOne({_id: id}).exec(callback);
}

const actualizar = (objeto,callback) => {
    objeto.save(callback);
}

const borrar = (id, callback) => {
    listaModel.find({_id: id}).remove().exec(callback);
}

module.exports = {
    Todas: todas,
    Buscar: buscar,
    Agregar: agregar,
    BuscarPorId: buscarPorId,
    Actualizar: actualizar,
    Borrar: borrar
}