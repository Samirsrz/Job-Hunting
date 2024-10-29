import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import { data } from "autoprefixer";

const AdminPayment = () => {
 
    const [paymentData, setPaymentData] = useState([]);
 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/get-payments`);
            console.log(data);
            setPaymentData(data);
          } catch (error) {
            console.error("Error fetching payment data:", error);
          }
        };
    
        fetchData();
      }, []);


 
    return (
        <div className="p-6">
        <h2 className="text-4xl font-semibold text-center lg:mb-9">Payment Data</h2>
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Created At</th>
              <th className="px-4 py-2 border">Payment Intent ID</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment) => (
              <tr key={payment.paymentIntentId} className="text-center">
                <td className="px-4 py-2 border">{payment.email}</td>
                <td className="px-4 py-2 border">{payment.status}</td>
                <td className="px-4 py-2 border">{payment.type}</td>
                <td className="px-4 py-2 border">{new Date(payment.createdAt).toLocaleString()}</td>
                <td className="px-4 py-2 border">{payment.paymentIntentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AdminPayment;