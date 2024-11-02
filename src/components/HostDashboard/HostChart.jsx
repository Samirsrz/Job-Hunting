import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const xLabels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export default function HostChart({ jobs, applications, hiredInfo }) {
  const aData = [jobs, jobs, jobs, jobs, jobs, jobs, jobs];
  const bData = [
    applications,
    applications,
    applications,
    applications,
    applications,
    applications,
    applications,
  ];
  const cData = [
    hiredInfo,
    hiredInfo,
    hiredInfo,
    hiredInfo,
    hiredInfo,
    hiredInfo,
    hiredInfo,
  ];

  console.log("sldkflakslfd", aData);

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
