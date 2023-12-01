import React, { createContext, useContext, useEffect, useState } from 'react'


const Context = createContext()

const ContextProvider = ({children}) => {

    const[products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    const [userData, setUserData] = useState({})

    const [formUserData, setFormUserData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    })

    const handleRegisterUser = (evento) =>{
        evento.preventDefault()
        console.log(evento)
        setUserData(formUserData)
        setFormUserData({nombre:'',
        email:'',
        mensaje:''})
    }
    
    const handleChangeRegisterUser = (evento) =>{
        console.log(evento.target.value)
        console.log(formUserData)
        setFormUserData({...formUserData, [evento.target.name]:evento.target.value})
    }
    

    useEffect(() =>{
        fetch('http://localhost:3040/api/products')
        .then(res => res.json())
        .then(result => setProducts(result.products))
    }, [])
    console.log(products)


    const getProductById = (pid) => {
        return products.find(product => product._id === pid)
    }

    const isInCart = (pid) => cart.some((product) => product._id === pid)

    const addProductCart = (pid, quantity) => {
        if(isInCart(pid)){
            setCart(cart.map((product) => {
                if(product._id === pid.toString()){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            return setCart([...cart, {...getProductById(pid), quantity : quantity}])
        }
    }
 
    const getTotal = () => {
        let total = 0;
        cart.forEach((product) => total += product.precio * product.quantity)
        return total
    }

    const removeCart = () => {
        return setCart([])
    }



  return (
    <Context.Provider value={{products, formUserData, handleRegisterUser, handleChangeRegisterUser, getProductById, cart, isInCart, addProductCart,getTotal,removeCart}}>
    {children} 
    </Context.Provider>
  )
}


export const useCustomContext = () => useContext(Context)

export default ContextProvider