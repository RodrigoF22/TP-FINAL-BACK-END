import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Counter} from '../../Components'
import './detailpage.css'

const DetailPage = () => {
    const {pid} = useParams()
    console.log(pid)

    const [productDetail, setProductDetail] = useState([])
    

    useEffect(() =>{
        fetch('http://localhost:3040/api/products/' + pid)
        .then(res => res.json())
        .then((result) => setProductDetail(result.product))
    }, [])
  return (
    <div className='detailPage-container'>
        <h1>Apple Store</h1>
        <div className='detailPage-block'>
            <div style={{backgroundColor:'white'}}><img src={'http://localhost:3040/images/' + productDetail.thumbnail}/></div>
            <h3>{productDetail.nombre}</h3>
            <span>${productDetail.precio}</span>
        </div>
        <p>{productDetail.descripcion}</p>

    
    <Counter initialValue={1} stock={productDetail.stock} pid = {productDetail._id}/>
        
    </div>
  )
}

export default DetailPage