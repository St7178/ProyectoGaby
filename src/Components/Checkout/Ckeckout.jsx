import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { ShopContext } from '../../Context/ShopContext';

const stripePromise = loadStripe('pk_test_51Q6dVQP8ors4wWKV3lxJGRHfqjdZ3JC7fOlGJtieTx4Zr86nWTL1h7Xvzx1WPJ7eisOuBZB8AEI4yGNBpTrxvWwV00vRmljN2J'); // Reemplaza con tu clave pública de Stripe

const Checkout = () => {
    const { cartItems, all_product, getTotalCartAmount } = useContext(ShopContext);

    const createCheckoutSession = async () => {
        const items = Object.keys(cartItems)
            .filter((item) => cartItems[item] > 0)
            .map((item) => {
                const product = all_product.find((p) => p.id === Number(item));
                return {
                    nombre: product.nombre,
                    imagen: product.imagen,
                    precio_nuevo: product.precio_nuevo,
                    cantidad: cartItems[item],
                };
            });

        const response = await fetch('http://localhost:4000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items }),
        });

        const session = await response.json();

        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId: session.id });
    };

    return (
        <div>
            <h2>Total: ${getTotalCartAmount()}</h2>
            <button onClick={createCheckoutSession}>CONTINUAR CON EL PAGO</button>
        </div>
    );
};

export default Checkout;
