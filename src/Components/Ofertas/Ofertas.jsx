import React from 'react'
import './Ofertas.css'
import ofertas_exclusivas from '../Assets/Banner-Max-agosto-2024.png'
export const Ofertas = () => {
  return (
    <div className='ofertas'>
        <div className="ofertas-left">
            <h1>OFERTAS</h1>
            <h1>EXCLUSIVAS PARA TI</h1>
            <p>SOLO EN LOS PRODUCTOS MAS VENDIDOS</p>
            <button>Compra Ahora</button>
        </div>
        <div className="ofertas-right">
            <img src={ofertas_exclusivas} alt="" />
        </div>
    </div>
  )
}
