import React from 'react'
import './Mejores.css'
import datos_productos from '../Assets/data'
import { Item } from '../Items/Item'

export const Mejores = () => {
  return (
    <div className='mejores'>
        <h1>MEJORES PRODUCTOS DEL MES</h1>
        <hr />
        <div className='mejores-item'>
            {datos_productos.map((item,i)=>{
                return <Item key={i} id={item.id} nombre={item.nombre} imagen={item.imagen} precio_nuevo={item.precio_nuevo} precio_viejo={item.precio_viejo}/>
            })}
        </div>
    </div>
  )
}
