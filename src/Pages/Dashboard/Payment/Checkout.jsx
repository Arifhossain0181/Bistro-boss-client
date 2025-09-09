import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const Checkout = () => {
     const stripe = useStripe();
  const elements = useElements();
  const handlesubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !elements){
return
    }
    const card = elements.getElement(CardElement)

    if(card === null){
        return
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default Checkout;
