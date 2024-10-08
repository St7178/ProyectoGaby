import React from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useContext } from 'react';

export const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Productos</p>
                <p>Titulo</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Eliminar</p>
            </div>
            <hr />
            {all_product.map((e) => {
                // Verifica si cartItems tiene una entrada para e.id
                const quantity = cartItems[e.id] || 0; // Usa 0 si no existe
                if (quantity > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format">
                                <img src={e.imagen} alt="" className='carticon-product-icon' />
                                <p>{e.nombre}</p>
                                <p>${e.precio_nuevo}</p>
                                <button className='cartitems-cantidad'>{quantity}</button>
                                <p>${(e.precio_nuevo * quantity).toFixed(2)}</p>
                                <img src={remove_icon} onClick={() => { removeCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // Retorna null si no hay cantidad
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Tarifa de envio</p>
                            <p>Gratis</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>CONTINUAR CON EL PAGO</button>
                </div>
            </div>
        </div>
    );
};
