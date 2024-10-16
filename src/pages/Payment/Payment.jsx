
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
        toast.error('No payment data found');
      }
    } catch (error) {
      console.error('Error fetching payment data:', error);
      toast.error('Error fetching payment data');
    } finally {
      setIsFetching(false); 
    }
  };

  fetchPaymentInfo(); 
}, [user?.email, loading]);


console.log(paymentInfo);

    return (
      <div className="">
        <h1 className="text-center text-5xl font-bold lg:space-y-28 lg:my-20 mx-auto">~~Payment Gateway~~</h1>
       
   <div className="flex flex-col sm:mx-auto sm:p-2 lg:flex-row justify-center space-x-6 py-8">

    <div className=" bg-gray-100  group-hover:scale-110 
                transition shadow-lg text-center items-center justify-center w-96">
        <img className="w-full mx-auto mb-4 space-y-3" src="https://i.ibb.co.com/5cvBn2Q/payent-regualr.jpg" alt="" />
        <h2 className=" text-center text-2xl font-bold text-gray-700 mb-6">
            {" "}
           $80/month {" "}
          </h2>
        <h2 className="card-title text-gray-700 mb-6">
            {" "}
            <TiTick /> Limited job postings per month.{" "}
          </h2>
          <h2 className="card-title text-gray-700 mb-6">
            {" "}
            <TiTick /> Basic job visibility in search results.{" "}
          </h2>
          <h2 className="card-title text-gray-700 mb-6">
            {" "}
            <TiTick /> Standard job posting duration.{" "}
          </h2>
         <button disabled={paymentInfo === 'regular'} className=" w-full">
         <Link  to='/dashboard/payment-form' className="btn bottom-0 w-full pb-2 bg-blue-500 text-white font-semibold py-4 rounded hover:bg-blue-600 transition block">
            Select Regular
          </Link>
         </button>
</div>


<div className=" bg-gray-100  shadow-lg text-center border-primary items-center justify-center w-96">
        <img className=" w-full mx-auto mb-4" src="https://i.ibb.co.com/dkvkHDv/1-Wd29p-Dpkc-DXIDZ5ky-ENN7g.jpg" alt="" />
        <h2 className=" text-center text-2xl font-bold text-gray-700 mb-6">
            {" "}
           $120/month {" "}
          </h2>
        <h2 className="card-title text-gray-700 mb-6">
            {" "}
            <TiTick /> Unlimited job postings.{" "}
          </h2>
          <h2 className="card-title text-gray-700 mb-6">
            {" "}
            <TiTick />Featured job listings {" "}
          </h2>
          <h2 className="card-title text-gray-700 mb-6">
            {" "}
            <TiTick /> Extended job posting duration {" "}
          </h2>
          <button disabled={paymentInfo === 'premium'} className="w-full">
         <Link  to='/dashboard/payment-form' className="btn bottom-0 w-full pb-2 bg-blue-500 text-white font-semibold py-4  rounded hover:bg-blue-600 transition block">
            Select Premium
          </Link>
            </button>
       </div>
    </div>

      </div>
    );
};

export default Payment;