import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import UseAxioshook from "../../../Hooks/UseAxioshook";
import Usecarts from "../../../Hooks/Usecarts";
import Auth from "../../../Hooks/Auth";
import Swal from "sweetalert2";
const Checkout = () => {
  const [error, setError] = useState("");
  const [transId, setTransId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { user } = Auth();
  const stripe = useStripe();
  const elements = useElements();
  const axiossecure = UseAxioshook();
  const [cart, refetch] = Usecarts();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // 🔹 Get clientSecret from backend
  useEffect(() => {
    if (totalPrice > 0) {
      axiossecure
        .post("/create-Payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiossecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    // 🔹 Confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.error("Confirm error:", confirmError.message);
      setError(confirmError.message);
    } else if (paymentIntent?.status === "succeeded") {
      console.log("Payment succeeded:", paymentIntent.id);
      setTransId(paymentIntent.id);
      setError("");
      //now save the Payment in the database
      const Paument = {
        email: user.email,
        price: totalPrice,
        data: new Date(), //utc data convert use moment js to
        cartIds: cart.map((item) => item._id),
        menuItemIds: cart.map((item) => item.manuId),
        status: "Pending",
        transId: paymentIntent.id,
      };
      const res = await axiossecure.post("/Payment", Paument);

      //console.log(res.data ,'aadkjfdk')
      refetch();
      if (res.data?.Paymentresult?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for your taka",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button
        className="btn btn-ghost bg-amber-600 p-4 mt-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>

      {error && <h6 className="text-red-600">{error}</h6>}
      {transId && (
        <h4 className="text-green-500">
          ✅ Payment successful! Transaction ID: {transId}
        </h4>
      )}
    </form>
  );
};

export default Checkout;
