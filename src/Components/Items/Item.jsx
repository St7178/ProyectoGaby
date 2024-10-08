import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

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
        <Link to={`/productos/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.imagen} alt="" /></Link>
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