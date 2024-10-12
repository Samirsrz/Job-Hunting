

const Payment = () => {
    return (
      <div>
        <h1 className="text-center text-5xl font-bold lg:space-y-28 lg:my-20 mx-auto">~~Payment Gateway~~</h1>
          <div className="flex justify-center space-x-6 py-8">

<div className="card bg-gray-100 rounded-lg shadow-lg p-8 text-center w-1/3">

<img src="https://i.ibb.co.com/5cvBn2Q/payent-regualr.jpg" alt="" />
  <h2 className="text-2xl font-bold mb-4">Regular Membership</h2>
  <p className="text-gray-700 mb-6">Basic job posting with standard visibility.</p>
  <p className="text-xl font-semibold mb-6">$10 per/month</p>
  <p className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition block">
    Select Regular
  </p>
</div>


<div className="card bg-yellow-100 rounded-lg shadow-lg p-8 text-center w-1/3">
  <h2 className="text-2xl font-bold mb-4">Premium Membership</h2>
  <p className="text-gray-700 mb-6">Featured job posting with high visibility and priority listing.</p>
  <p className="text-xl font-semibold mb-6">$100 per/year</p>
  <p className="bg-green-500 text-white font-semibold py-2 px-6 rounded hover:bg-green-600 transition block">
    Select Premium
  </p>
</div>
</div>
      </div>
    );
};

export default Payment;