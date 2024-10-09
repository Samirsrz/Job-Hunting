import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample data, you can replace this with your actual data
const data = [
  { day: "Mon", thisWeek: 202, lastWeek: 150 },
  { day: "Tue", thisWeek: 248, lastWeek: 170 },
  { day: "Wed", thisWeek: 110, lastWeek: 180 },
  { day: "Thu", thisWeek: 365, lastWeek: 290 },
  { day: "Fri", thisWeek: 293, lastWeek: 220 },
  { day: "Sat", thisWeek: 210, lastWeek: 190 },
  { day: "Sun", thisWeek: 330, lastWeek: 240 },
];

const TrafficChart = () => {
  return (
    <div className="bg-white rounded-lg w-[40%] flex flex-col">
      <div>
        <h1 className="text-2xl rounded-lg font-bold bg-white p-5">
          Total Traffic
        </h1>
      </div>
      <div className="w-[100%] h-[300px]">
        {/* <h1 className="text-2xl font-bold bg-white  p-5">User Activity</h1> */}
        <ResponsiveContainer width="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorThisWeek" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="colorLastWeek" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#11998E" stopOpacity={0.8} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              horizontal={false}
            />
            <Tooltip />
            <Legend verticalAlign="top" />
            <Area
              type="monotone"
              dataKey="thisWeek"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorThisWeek)"
              activeDot={{ r: 8 }}
            />
            <Area
              type="monotone"
              dataKey="lastWeek"
              stroke="#4ade81"
              fillOpacity={1}
              fill="url(#colorLastWeek)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficChart;
