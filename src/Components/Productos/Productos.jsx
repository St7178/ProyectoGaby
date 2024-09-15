import React from 'react'
import './Productos.css'
import nuestros_productos from '../Assets/productos.js'
import { Item } from '../Items/Item'
export const Productos = () => {
  return (
    <div className='products'>
        <h1>NUESTROS PRODUCTOS</h1>
        <hr />
        <div className="our_products">
            {nuestros_productos.map((item, i)=>{
                return <Item key={i} id={item.id} nombre={item.nombre} imagen={item.imagen} precio_nuevo={item.precio_nuevo} precio_viejo={item.precio_viejo}/>
            })}
        </div>
    </div>
  )
}
