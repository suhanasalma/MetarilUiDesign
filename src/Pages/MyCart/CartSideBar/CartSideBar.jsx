import { Paper, Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

const CartSideBar = () => {
  const cartItems = useSelector(state=>state?.CartItems)
  let totalQuantity = 0
  let price = 0
if(cartItems){
  for (let product of cartItems) {
    totalQuantity += product.quantity;
    price = totalQuantity*product.price
  }
}

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
        <Typography variant="p">{totalQuantity}</Typography>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="p">Price</Typography>
        <Typography variant="p"> $ {price}</Typography>
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
