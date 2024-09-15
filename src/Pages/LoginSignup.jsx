import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-cont">
        <h1>Crear Cuenta</h1>
        <div className="loginsignup-campos">
          <input type="text" placeholder='Nombre' />
          <input type="email" placeholder='Correo Electronico' />
          <input type="password" placeholder='Contraseña'/>
        </div>
        <button>Continuar</button>
        <p className='loginsignup-login'>Ya tienes una cuenta? <span>Iniciar Sesion</span></p>
        <div className="loginsignup-aceptar">
          <input type="checkbox" name="" id="" />
          <p>Para continuar, Acepta los terminos y condiciones.</p>
        </div>
      </div>
    </div>
  )
}
