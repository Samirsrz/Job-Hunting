
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";


const Payment = () => {
const {user, loading} = useAuth();
 const [paymentInfo, setPaymentInfo] = useState('');
 const [isFetching, setIsFetching] = useState(false);

 useEffect(() => {
  const fetchPaymentInfo = async () => {
    if (!user?.email || loading) return;

    try {
      setIsFetching(true); 
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/payment/${user.email}`);
      
      if (response.data) {
        setPaymentInfo(response?.data[0].type);
      } else {
        return
       // toast.error('No payment data found');
      }
    } catch (error) {
      console.error('Error fetching payment data:', error);
     // toast.error('Error fetching payment data');
    } finally {
      setIsFetching(false); 
    }
  };

  fetchPaymentInfo(); 
}, [user?.email, loading]);


//console.log(paymentInfo);

    return (
      <div className="">
        <h1 className="text-center text-5xl font-bold lg:space-y-28 lg:my-20 mx-auto">Payment Gateway</h1>
       

<div className="flex flex-col sm:mx-auto sm:p-2 lg:flex-row justify-center space-x-6 py-8">

  {/* Regular Plan Card */}
  <div className="bg-gray-100 group transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg text-center items-center justify-center w-96 rounded-lg">
    <img className="w-full mx-auto mb-4 rounded-t-lg" src="https://i.ibb.co.com/5cvBn2Q/payent-regualr.jpg" alt="Regular Plan" />
    <h2 className="text-2xl font-bold text-gray-700 mb-6">
      $80/month
    </h2>
    <div className="px-6 space-y-4 text-gray-700">
      <h2 className="text-lg flex items-center justify-center">
        <TiTick className="mr-2" /> Limited job postings per month
      </h2>
      <h2 className="text-lg flex items-center justify-center">
        <TiTick className="mr-2" /> Basic job visibility in search results
      </h2>
      <h2 className="text-lg flex items-center justify-center">
        <TiTick className="mr-2" /> Standard job posting duration
      </h2>
    </div>

    {/* Regular Plan Button */}
    <button
      disabled={paymentInfo === 'regular'}
      className={`w-full mt-6 py-3 rounded-b-lg font-semibold text-white transition-colors duration-300 
        ${paymentInfo === 'regular' ? 'bg-green-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
    >
      {paymentInfo === 'regular' ? (
        <span>Already Selected</span>
      ) : (
        <Link to='/dashboard/payment-form' className="block w-full">
          Select Regular
        </Link>
      )}
    </button>
  </div>

  {/* Premium Plan Card */}
  <div className="bg-gray-100 group transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg text-center items-center justify-center w-96 rounded-lg">
    <img className="w-full mx-auto mb-4 rounded-t-lg" src="https://i.ibb.co.com/dkvkHDv/1-Wd29p-Dpkc-DXIDZ5ky-ENN7g.jpg" alt="Premium Plan" />
    <h2 className="text-2xl font-bold text-gray-700 mb-6">
      $120/month
    </h2>
    <div className="px-6 space-y-4 text-gray-700">
      <h2 className="text-lg flex items-center justify-center">
        <TiTick className="mr-2" /> Unlimited job postings
      </h2>
      <h2 className="text-lg flex items-center justify-center">
        <TiTick className="mr-2" /> Featured job listings
      </h2>
      <h2 className="text-lg flex items-center justify-center">
        <TiTick className="mr-2" /> Extended job posting duration
      </h2>
    </div>

    {/* Premium Plan Button */}
    <button
      disabled={paymentInfo === 'premium'}
      className={`w-full mt-6 py-3 rounded-b-lg font-semibold text-white transition-colors duration-300 
        ${paymentInfo === 'premium' ? 'bg-green-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
    >
      {paymentInfo === 'premium' ? (
        <span>Already Selected</span>
      ) : (
        <Link to='/dashboard/payment-form' className="block w-full">
          Select Premium
        </Link>
      )}
    </button>
  </div>

</div>

      </div>
    );
};

export default Payment;