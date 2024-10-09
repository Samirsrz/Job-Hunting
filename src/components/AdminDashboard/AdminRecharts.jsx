import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "Jan", total: 400, success: 300, failed: 50 },
  { name: "Feb", total: 500, success: 450, failed: 0 },
  { name: "Mar", total: 600, success: 500, failed: 100 },
  { name: "Apr", total: 700, success: 650, failed: 100 },
  { name: "May", total: 456, success: 587, failed: 200 },
  { name: "Jun", total: 600, success: 400, failed: 100 },
  { name: "Jul", total: 700, success: 500, failed: 100 },
  { name: "Aug", total: 500, success: 450, failed: 100 },
  { name: "Sep", total: 600, success: 500, failed: 100 },
  { name: "Oct", total: 700, success: 600, failed: 50 },
  { name: "Nov", total: 500, success: 400, failed: 100 },
  { name: "Dec", total: 600, success: 500, failed: 300 },
];

const AdminRecharts = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold bg-white rounded-t-lg p-5 w-[70%]">
        User Activity
      </h1>
      <ResponsiveContainer
        width="70%"
        height={300}
        className="bg-white  rounded-b-lg"
      >
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis 
          domain={[0, 800]} // Setting the range of Y axis
          tickCount={9}      // Control the number of ticks (increments of 100)
          interval={0}       // Force rendering every tick
          tickFormatter={(value) => `${value}`} // Format Y axis values
          />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <Line type="monotone" dataKey="success" stroke="#82ca9d" />
          <Line type="monotone" dataKey="failed" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminRecharts;
