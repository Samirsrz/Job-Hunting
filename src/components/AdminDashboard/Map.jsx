// import React from "react";
// import { Chart } from "react-google-charts";

// const Map = () => {
//   const data = [
//     ["Country", "Sales"],
//     ["United States", 1000],
//     ["Brazil", 400],
//     ["China", 300],
//     ["Indonesia", 200],
//     ["Egypt", 150],
//     ["India", 500],
//   ];

//   const options = {
//     colorAxis: { colors: ["#FF6B6B", "#1E90FF"] }, // Adjust color range
//     backgroundColor: "#f5f5f5", // Background color
//     datalessRegionColor: "#EAEAEA", // Color for countries without data
//     defaultColor: "#f5f5f5",
//   };

//   return (
//     <div className="border2">
//       <Chart
//         className="w-96 bg-white border-2 "
//         chartType="GeoChart"
//         width="40%"
//         height="300px"
//         data={data}
//         options={options}
//       />
//     </div>
//   );
// };

// export default Map;

import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample data, you can replace this with your actual data
const data = [
  { day: "Mon", thisWeek: 202, lastWeek: 150 },
  { day: "Tue", thisWeek: 248, lastWeek: 170 },
  { day: "Wed", thisWeek: 179, lastWeek: 180 },
  { day: "Thu", thisWeek: 365, lastWeek: 290 },
  { day: "Fri", thisWeek: 293, lastWeek: 220 },
  { day: "Sat", thisWeek: 210, lastWeek: 190 },
  { day: "Sun", thisWeek: 330, lastWeek: 240 },
];

const ActivityChart = () => {
  return (
    <div className="bg-white w-[60%] h-[300px]">
      <ResponsiveContainer width="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorThisWeek" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorLastWeek" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis
            domain={[0, 100]} // Setting the range of Y axis
            tickCount={10} // Control the number of ticks (increments of 100)
            interval={0} // Force rendering every tick
            tickFormatter={(value) => `${value}`} // Format Y axis values
          />
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
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorThisWeek)"
            activeDot={{ r: 8 }}
          />
          <Area
            type="monotone"
            dataKey="lastWeek"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorLastWeek)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
