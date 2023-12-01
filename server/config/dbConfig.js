/* Conexión con MONGODB */
const mongoose = require('mongoose')

const CONNECTION_STRING = process.env.CONNECTION_STRING

mongoose.connect(CONNECTION_STRING + 'productos_utn_noche_tp_final', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('Conexión exitosa')
})
.catch((err) => {
    console.error(err)
})

module.exports = mongoose

