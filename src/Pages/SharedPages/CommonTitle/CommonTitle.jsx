import { Typography } from "@mui/material";
import React from "react";

const CommonTitle = ({ title, sx }) => {
  return (
    <div>
      <Typography
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          // textAlign: "center",
          marginBottom: "10px",
          color:"black",
          ...sx,
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default CommonTitle;
