import React from 'react'
import './productcardcart.css'

const ProductCardCart = ({product}) => {
  return (
    <div className='ProductCardCartContainer'>
        <div style={{backgroundColor: 'white'}}><img src={'http://localhost:3040/images/' + product.thumbnail}/></div>
        <h3>{product.nombre}</h3>
        <span>${product.precio}</span>
        <p>Cantidad: {product.quantity}</p>
    </div>
  )
}

export default ProductCardCart