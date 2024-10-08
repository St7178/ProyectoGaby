import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';



export const Products = () => {
  const { all_product, datos_productos } = useContext(ShopContext);
  const { productoId } = useParams();
  
  const path = window.location.pathname;

  const product = path.includes('mejores-productos')
    ? datos_productos.find((item) => item.id === Number(productoId))
    : all_product.find((item) => item.id === Number(productoId));

  if (!product) {
    return <div>Producto no encontrado</div>; 
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};
