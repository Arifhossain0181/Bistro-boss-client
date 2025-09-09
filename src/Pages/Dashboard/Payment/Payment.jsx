import React from 'react';
import SectionTilte from "../../../ComPonent/SectionTitle/SectionTilte";
import {CheckoutProvider} from '@stripe/react-stripe-js/checkout';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe()

const Payment = () => {
    return (
        <div>
            <div>
               < SectionTilte heading='Payment' subheading='Please Pay to eat'></SectionTilte>
               <div>
               <Elements stripe={stripePromise}>
                        
               </Elements>
               </div>
            </div>
        </div>
    );
};

export default Payment;