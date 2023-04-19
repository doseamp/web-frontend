import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DbGrid3 = () => {
  return (
    <Box sx={{ backgroundColor: "#ffffff", borderRadius: 2, px: 2, py: 2 }}>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: "15px" }}>Recent transactions</Typography>
        <Link
          to=""
          style={{
            color: "#54adf3",
            marginLeft: "auto",
            fontSize: "8px",
          }}
        >
          View all
        </Link>
      </Box>
      <Stack direction="column">
        <Stack direction="row" sx={{ py: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>NGN ⇌ USDT</Typography>
          <Box sx={{ ml: "auto" }}>
            <Typography sx={{ color: "#D61717" }}>-$378.33</Typography>
            <Typography sx={{ fontSize: "8px" }}>Today, 10.40 am</Typography>
          </Box>
        </Stack>
        <Stack direction="row" sx={{ py: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>NGN ⇌ USDT</Typography>
          <Box sx={{ ml: "auto" }}>
            <Typography sx={{ color: "#17D641" }}>+$378.33</Typography>
            <Typography sx={{ fontSize: "8px" }}>Today, 10.40 am</Typography>
          </Box>
        </Stack>
        <Stack direction="row" sx={{ py: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>NGN ⇌ USDT</Typography>
          <Box sx={{ ml: "auto" }}>
            <Typography sx={{ color: "#D61717" }}>-$378.33</Typography>
            <Typography sx={{ fontSize: "8px" }}>Today, 10.40 am</Typography>
          </Box>
        </Stack>
        <Stack direction="row" sx={{ py: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>NGN ⇌ USDT</Typography>
          <Box sx={{ ml: "auto" }}>
            <Typography sx={{ color: "#17D641" }}>+$378.33</Typography>
            <Typography sx={{ fontSize: "8px" }}>Today, 10.40 am</Typography>
          </Box>
        </Stack>
        <Stack direction="row" sx={{ py: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>NGN ⇌ USDT</Typography>
          <Box sx={{ ml: "auto" }}>
            <Typography sx={{ color: "#D61717" }}>-$378.33</Typography>
            <Typography sx={{ fontSize: "8px" }}>Today, 10.40 am</Typography>
          </Box>
        </Stack>
        <Stack direction="row" sx={{ py: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>NGN ⇌ USDT</Typography>
          <Box sx={{ ml: "auto" }}>
            <Typography sx={{ color: "#17D641" }}>+$378.33</Typography>
            <Typography sx={{ fontSize: "8px" }}>Today, 10.40 am</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DbGrid3;
