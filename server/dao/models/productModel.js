const mongoose = require('mongoose')

const Product = mongoose.model('product', {
    categoria: String,
    nombre: String,
    precio: Number,
    stock: Number,
    descripcion: String,
    thumbnail: String,
})

module.exports = Product