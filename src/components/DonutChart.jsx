import { Box } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Wallet 1", "Wallet 2", "Wallet 3"],
    datasets: [
      {
        label: "Amount",
        data: [200, 300, 500],
        backgroundColor: ["red", "blue", "black"],
        borderColor: ["red", "blue", "black"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Doughnut data={data} options={options} style={{ marginLeft: "auto" }} />
    </Box>
  );
};

export default DonutChart;
