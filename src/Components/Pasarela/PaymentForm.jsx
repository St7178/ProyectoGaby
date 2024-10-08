import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        
        const { error, paymentIntent } = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: 'Nombre del Cliente',
                },
            },
        });

        if (error) {
            setError(error.message);
            setSuccess(null);
        } else {
            setError(null);
            setSuccess('Pago realizado con éxito!');
            console.log(paymentIntent);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>Pagar</button>
            {error && <div>{error}</div>}
            {success && <div>{success}</div>}
        </form>
    );
};

export default PaymentForm;
