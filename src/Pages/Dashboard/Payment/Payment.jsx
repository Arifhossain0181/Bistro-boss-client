import React from 'react';
import SectionTilte from "../../../ComPonent/SectionTitle/SectionTilte";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from '../../Dashboard/Payment/Checkout';   // ✅ make sure path is correct

const stripePromise = loadStripe(
  "pk_test_51S5nrNF07KKYLVvVq7S98e3fWAs1p0bSo9QxICEzBtj8bFZRIJOUZLY6F405KOvCU3SVmpEF2deNY49owmBUS6G800exyrMRDC"
);

const Payment = () => {
  return (
    <div>
      <SectionTilte heading="Payment" subheading="Please Pay to eat" />
      <div>
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
