import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <img src={product?.imagen || 'default_image.png'} alt='' className="thumbnail" />
                <img src={product?.imagen || 'default_image.png'} alt='' className="thumbnail" />
                <img src={product?.imagen || 'default_image.png'} alt='' className="thumbnail" />
                <img src={product?.imagen || 'default_image.png'} alt='' className="thumbnail" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product?.imagen || 'default_image.png'} alt='' />
            </div>
            <div className="productdisplay-right">
                <h1 className='product-title'>{product?.nombre || 'Nombre no disponible'}</h1>
                <div className="productdisplay-right-star">
                    {[...Array(4)].map((_, index) => <img key={index} src={star_icon} alt="" />)}
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.precio_viejo}</div>
                    <div className="productdisplay-right-price-new">${product.precio_nuevo}</div>
                </div>
                <div className="productdisplay-right-description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo necessitatibus magni facere sequi exercitationem aliquam ipsam iusto dolorum, voluptatibus excepturi!</p>
                </div>
                <button className='add-to-cart-button' onClick={()=>{addToCart(product.id)}}>AÑADIR AL CARRITO</button>
            </div>
        </div>
    );
};
