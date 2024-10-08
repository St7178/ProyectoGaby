import React, { useEffect, useState } from 'react'
import './Mejores.css'
import { Item } from '../Items/Item'

export const Mejores = () => {

  const [mejoresProductos,setMejoresProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/mejoresproductos')
    .then((response)=>response.json())
    .then((data)=>setMejoresProducts(data));
  },[])

  return (
    <div className='mejores'>
        <h1>MEJORES PRODUCTOS DEL MES</h1>
        <hr />
        <div className='mejores-item'>
            {mejoresProductos.map((item,i)=>{
                return <Item key={i} id={item.id} nombre={item.nombre} imagen={item.imagen} precio_nuevo={item.precio_nuevo} precio_viejo={item.precio_viejo}/>
            })}
        </div>
    </div>
  )
}
