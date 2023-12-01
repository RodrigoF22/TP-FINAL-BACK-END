import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './contactpage.css'

const ContactPage = () => {

  const {formUserData, handleChangeRegisterUser, handleRegisterUser} = useCustomContext()

  return (
    <form onSubmit={handleRegisterUser} className='formularioUsuario'>
      <h3>Contact</h3>
      <label htmlFor="nombre">Full name<span style={{fontSize:'11px'}}>*</span></label>
      <input name='nombre' id='nombre' onChange={handleChangeRegisterUser} value={formUserData.nombre}/>
      <label htmlFor="email">Email<span style={{fontSize:'11px'}}>*</span></label>
      <input type="email" id='email' name='email' onChange={handleChangeRegisterUser} value={formUserData.email}/>
      <label htmlFor="mensaje">Message<span style={{fontSize:'11px'}}>*</span></label>
      <input type="text" id='mensaje' name='mensaje' onChange={handleChangeRegisterUser} value={formUserData.mensaje} className='inputMensaje'/>
      <button type='submit'>Send</button>
    </form>
  )
}

export default ContactPage