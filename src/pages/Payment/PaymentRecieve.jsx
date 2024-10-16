

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`);

const PaymentRecieve = () => {
   return (
        <div>
            <h1 className="text-5xl font-bold text-center lg:my-11">~~Please Pay~~</h1>
            <Elements stripe={stripePromise}>
             <PaymentForm />
          </Elements> 
        </div>
    );
};

export default PaymentRecieve;