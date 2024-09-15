import React from 'react';
import './Item.css';

const formatoPrecio = (precio) => {
  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2,
  });
  return formatter.format(precio);
};

export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.imagen} alt="" />
        <p>{props.nombre}</p>
        <div className="item-precios">
            <div className="item-precio-nuevo">
                {formatoPrecio(props.precio_nuevo)}
            </div>
            <div className="item-precio-viejo">
                {formatoPrecio(props.precio_viejo)}
            </div>
        </div>
    </div>
  );
};