const Product = require('../models/productModel')


const createProduct = async (product) => {
    const newProduct = new Product(product)
    try{
        return await newProduct.save()
    }catch(err){
        console.error(err)
    } 
}

const getProducts = async () => {
    return await Product.find({})
}

const deleteProduct = async (pid) => {
    try{
        const deletedProduct = await Product.findByIdAndDelete(pid)
        if(deletedProduct){
            return {ok: true, deletedProduct}
           }
           else{
            return {error: 'Producto no encontrado'}
           }
    }
    catch(err){
        return{error: 'id no válido'}
    }
}

const getProductById = async (pid) => {
    return await Product.findById(pid)
}

const updateProduct = async (pid, updatedData) =>{
    try{
        const product = await getProductById(pid)
        if(product){
            Object.assign(product,updatedData)
            const updatedProduct = await product.save()
            return{ok: true, updatedProduct}
        }
    }
    catch(err){
        return{error: 'id no válido'}
    }
}


module.exports = {createProduct, getProducts, deleteProduct, getProductById, updateProduct}