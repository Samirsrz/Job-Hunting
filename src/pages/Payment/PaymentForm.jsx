
import  { useState } from 'react';
import { useCreatePaymentIntentMutation } from '../../RTK/Api/PaymentApi/paymentSlice';
import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const PaymentForm = () => {
  const {user,loading} = useAuth();
  const [amount, setAmount] = useState('');
  const [createPaymentIntent, { data, error, isLoading }] = useCreatePaymentIntentMutation();
  const stripe = useStripe();
  const navigate =  useNavigate();
  const elements = useElements();
  let type=''
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    try { 
      if(Number(amount) !== 80 && Number(amount) !== 120){
        return toast.error('Enter the valid amount')
      }

      if(Number(amount) === 80) {
       type = 'regular'
      }
      else if(Number(amount) === 120){
        type = 'premium'
      }

      const paymentData = {
        payerEmail: user?.email,
        amount:  Number(amount),
        status:'success',
        type: type
      }
        const response = await createPaymentIntent(paymentData); 
      if(response.data){
        const { clientSecret } = response.data;
        if (clientSecret) {
            const cardElement = elements.getElement(CardElement);
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
              payment_method: {
               card:cardElement,
               billing_details: {
                   email: user?.email || 'anonymous',
                   name: user?.displayName || 'anonymous'
               }
              }
       
           });

            if (paymentResult.error) {
                console.error(paymentResult.error.message);
                toast.error(paymentResult.error.message)
            } else if (paymentResult.paymentIntent.status === 'succeeded') {
              toast.success('Payment Successfull')
                console.log('Payment successful!');
            }
        }
      }

   navigate('/dashboard/payment')
    } catch (error) {
        console.error('Error during payment:', error);
    }
  };

  return (
  
<div className="mx-auto p-20 bg-white rounded-lg shadow-lg">
  <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">Enter Your Card Details</h3>
  <form className="space-y-6" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="amount" className="block text-lg font-medium text-gray-700">
        Payment Amount
      </label>
      <div className="mt-2 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-lg">$</span>
        </div>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="block w-full pl-10 pr-3 py-3 text-lg rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div className="mt-6">
      <label className="block text-lg font-medium text-gray-700">Card Information</label>
      <div className="mt-2 border p-4 rounded-md shadow-sm bg-gray-50">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '20px',
                color: '#333',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#E53E3E',
              },
            },
          }}
        />
      </div>
    </div>

    <button
      type="submit"
      disabled={!stripe || isLoading}
      className="w-full py-3 bottom-0 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
    >
      {isLoading ? 'Processing...' : 'Pay'}
    </button>

    {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
  </form>
</div>


  );
};

export default PaymentForm;
