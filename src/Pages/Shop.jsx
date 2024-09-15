import React from 'react'
import { Home } from '../Components/Home/Home'
import { Mejores } from '../Components/Mejores/Mejores'
import { Ofertas } from '../Components/Ofertas/Ofertas'
import { Productos } from '../Components/Productos/Productos'

export const Shop = () => {
  return (
    <div>
        <Home/>
        <Mejores/>
        <Ofertas/>
        <Productos/>
    </div>
  )
}
