import React, { useState } from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignup = () => {

  const [state,setState] = useState("Iniciar Sesion");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async ()=>{
    console.log("Funcion Iniciar Sesion Ejecutada Correctamente", formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async ()=>{
    console.log("Funcion Registrarse Ejecutada Correctamente", formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-cont">
        <h1>{state}</h1>
        <div className="loginsignup-campos">
          {state==="Registrarse"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Nombre' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Correo Electronico' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Contraseña'/>
        </div>
        <button onClick={()=>{state==="Iniciar Sesion"?login():signup()}}>Continuar</button>
        {state==="Registrarse"?<p className='loginsignup-login'>Ya tienes una cuenta? <span onClick={()=>{setState("Iniciar Sesion")}}>Inicia Sesion Aqui</span></p>
        :<p className='loginsignup-login'>Deseas crear una cuenta? <span onClick={()=>{setState("Registrarse")}}>Click Aqui</span></p>}
        <div className="loginsignup-aceptar">
          <input type="checkbox" name="" id="" />
          <p>Para continuar, Acepta los terminos y condiciones.</p>
        </div>
      </div>
    </div>
  )
}
