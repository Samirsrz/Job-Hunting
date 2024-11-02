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
import TrafficChart from "./TrafficChart";

// Sample data
const data = [
  { name: "Jan", users: 0, Jobs: 0, Application: 0 },
  { name: "Feb", users: 0, Jobs: 0, Application: 0 },
  { name: "Mar", users: 11, Jobs: 0, Application: 0 },
  { name: "Apr", users: 14, Jobs: 0, Application: 0 },
  { name: "May", users: 15, Jobs: 0, Application: 0 },
  { name: "Jun", users: 10, Jobs: 12, Application: 0 },
  { name: "Jul", users: 9, Jobs: 1, Application: 0 },
  { name: "Aug", users: 7, Jobs: 7, Application: 0 },
  { name: "Sep", users: 0, Jobs: 2, Application: 5 },
  { name: "Oct", users: 2, Jobs: 9, Application: 10 },
  { name: "Nov", users: 1, Jobs: 7, Application: 2 },
  { name: "Dec", users: 0, Jobs: 0, Application: 0 },
];

const AdminRecharts = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold bg-white rounded-t-lg p-5 w-[100%]">
          User Activity
        </h1>
        <ResponsiveContainer
          width="100%"
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
              domain={[0, 100]} // Setting the range of Y axis
              tickCount={5} // Control the number of ticks (increments of 100)
              interval={0} // Force rendering every tick
              tickFormatter={(value) => `${value}`} // Format Y axis values
            />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
            <Line type="monotone" dataKey="Jobs" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Application" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <TrafficChart />
    </div>
  );
};

export default AdminRecharts;
