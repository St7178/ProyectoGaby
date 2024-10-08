import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

export const Breadcrums = (props) => {
  const { product } = props;

  if (!product) {
      return null; // O manejar el caso de producto no disponible
  }

  return (
      <div className='breadcrum'>
          INICIO <img src={arrow_icon} alt='' /> TIENDA <img src={arrow_icon} alt='' /> {product.nombre}
      </div>
  );
};