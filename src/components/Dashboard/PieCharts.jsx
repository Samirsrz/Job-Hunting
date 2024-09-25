import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const items = [
  { value: 10, label: "Views Application" },
  { id: "id_B", value: 15, label: "Appointed" },
  { id: "id_C", value: 20, label: "Rejected" },
];

const formatObject = (obj) => {
  if (obj === null) {
    return "  undefined";
  }
  return JSON.stringify(obj, null, 2)
    .split("\n")
    .map((l) => `  ${l}`)
    .join("\n");
};
const PieCharts = () => {
  const [identifier, setIdentifier] = React.useState(null);
  const [id, setId] = React.useState(undefined);

  const handleClick = (event, itemIdentifier, item) => {
    setId(item.id);
    setIdentifier(itemIdentifier);
  };
  return (
    <div className="py-5">
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <PieChart
          series={[
            {
              data: items,
            },
          ]}
          onItemClick={handleClick}
          width={400}
          height={200}
          margin={{ right: 200 }}
        />
      </Stack>
    </div>
  );
};

export default PieCharts;
