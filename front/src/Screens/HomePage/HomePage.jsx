import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import {ProductCard, Footer} from '../../Components'
import './homepage.css'

const HomePage = () => {
    
    const {products} = useCustomContext()
    
  return (
    <>
    <div className='container'>
        <h1>Apple Store</h1>
        <div className='productCard-container'>
            {products.length != 0 && products.map((product) =>(
                <ProductCard product = {product} key={product._id}/>
            ))}
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default HomePage