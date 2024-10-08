import React, { useEffect, useState } from 'react'
import './Productos.css'
import { Item } from '../Items/Item'
export const Productos = () => {

  const [productos_d,setProductos_d] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/productosd')
    .then((response)=>response.json())
    .then((data)=>setProductos_d(data));
  },[])

  return (
    <div className='products'>
        <h1>NUESTROS PRODUCTOS</h1>
        <hr />
        <div className="our_products">
            {productos_d.map((item, i)=>{
                return <Item key={i} id={item.id} nombre={item.nombre} imagen={item.imagen} precio_nuevo={item.precio_nuevo} precio_viejo={item.precio_viejo}/>
            })}
        </div>
    </div>
  )
}
