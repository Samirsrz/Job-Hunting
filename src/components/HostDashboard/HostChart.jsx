import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const aData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const bData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const cData = [2100, 2098, 4000, 3908, 2400, 8000, 4300];

const xLabels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export default function HostChart() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        {
          data: aData,
          color: "#16a34a",
          label: "jobs",
          id: "pvId",
          yAxisId: "leftAxisId",
        },
        {
          data: bData,
          label: "application",
          color: "#2563eb",
          id: "uvId",
          yAxisId: "rightAxisId",
        },
        {
          data: cData,
          label: "hired",
          id: "uId",
          yAxisId: "rightAxisId",
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
      yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
      // rightAxis="rightAxisId"
    />
  );
}
