import * as React from "react";
import { Box, Typography } from "@mui/material";

function LineItem({ header, data }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%", // Ensure content takes full width
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        {header}
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
        }}
      >
        {data}
      </Typography>
    </Box>
  );
}

export default LineItem;
