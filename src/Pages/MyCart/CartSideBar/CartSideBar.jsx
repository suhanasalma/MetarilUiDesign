import { Paper, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Divider from "@mui/material/Divider";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Box } from "@mui/system";

const CartSideBar = () => {
  return (
    <div>
      <Typography variant="p">Order Summery</Typography>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="p">Total Items</Typography>
        <Typography variant="p">1</Typography>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="p">Price</Typography>
        <Typography variant="p">1</Typography>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="p">Extra Price</Typography>
        <Typography variant="p">1</Typography>
      </Paper>
    </div>
  );
};

export default CartSideBar;
