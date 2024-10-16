import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // This is required for the area effect
);

const ImpressionChart = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "impression",
        data: [1, 3.8, 4.5, 10, 6.4, 7.3, 7.6], // Example data points
        fill: true, // Enable fill for the area chart
        backgroundColor: "rgba(54, 162, 235, 0.5)", // Area color
        borderColor: "rgba(54, 162, 235, 1)", // Line color
        pointBackgroundColor: "rgba(54, 162, 235, 1)", // Point color
        pointBorderColor: "#fff", // Point border color
        tension: 0.3, // Smooth the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable legend (as per your image)
      },
      title: {
        display: true,
        text: "Number of impression in a week",
      },
    },
    scales: {
      y: {
        title: {
          //   display: true,
        },
        grid: {
          display: false, // Removes horizontal grid lines
        },
        beginAtZero: false, // Adjust if needed
        suggestedMax: 10, // Max Y scale value
      },
      x: {
        title: {
          display: false,
        },
        grid: {
          display: false, // Removes horizontal grid lines
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ImpressionChart;
