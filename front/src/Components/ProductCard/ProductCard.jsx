import React from 'react'
import { Link } from 'react-router-dom'
import './productcard.css'

const ProductCard = ({product}) => {
  return (
    <div className='productCard'>
        <div style={{backgroundColor: 'white'}}><img src={'http://localhost:3040/images/' + product.thumbnail}/></div>
        {<span className='category'>{product.categoria}</span>}
        <h2>{product.nombre}</h2>
        <span className='price'>${product.precio}</span>
        <Link to={'/detail/' + product._id} className='linkProductDetail'>Show details</Link> 
    </div>
  )
}

export default ProductCard