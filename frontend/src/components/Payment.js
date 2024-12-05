import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51QSWNhDczhFPbY6YWCGFV5oCvAaYrQnadiAlaEF1oO1bcMmvurxQ910hAWWbrDui5uG0WR5SwoFPyS9kdnLWXSJS00pBpDiDE2'); 

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe has not loaded');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment('client-secret', {
        payment_method: { card: cardElement },
      });

      if (error) {
        console.error('Payment Error:', error.message);
        navigate('/payment-error'); // Redirect on error
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment successful:', paymentIntent);
        navigate('/success'); // Redirect on success
      }
    } catch (err) {
      console.error('Error processing payment:', err);
      navigate('/payment-error'); // Handle unexpected errors
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </Elements>
  );
};

export default Payment;



