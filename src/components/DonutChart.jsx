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
        data: [169.99, 123.67, 3942.54],
        backgroundColor: ["#FF9800", "#54ADF3", "#817E7E"],
        borderColor: ["#FF9800", "#54ADF3", "#817E7E"],
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

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "Total",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.5;
        ctx.fillText(text, textX, textY);
        var text2 = "$5000",
          text2X = Math.round((width - ctx.measureText(text2).width) / 2),
          text2Y = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.fillText(text2, text2X, text2Y);
        ctx.save();
      },
    },
  ];

  return (
    <Box
      sx={{
        width: {
          xs: "50%",
          md: "100px",
        },
      }}
    >
      <Doughnut
        data={data}
        options={options}
        plugins={plugins}
        style={{ marginLeft: "auto" }}
      />
    </Box>
  );
};

export default DonutChart;
