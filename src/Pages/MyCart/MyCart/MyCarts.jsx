import { Checkbox, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CartSideBar from '../CartSideBar/CartSideBar';
import MyCart from './MyCart';
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Divider from "@mui/material/Divider";


const MyCarts = () => {
  const handleONClick = ()=>{
    console.log('clicked');
  }
  return (
    <div>
      <Paper
        sx={{
          boxShadow: "none",
          alignItems: "center",
          marginBottom: "40px",
          backgroundColor: "inherit",
        }}
      >
        <hr />
      </Paper>
      <Paper
        sx={{
          display: "flex",
          boxShadow: "none",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0px  60px",
          backgroundColor: "inherit",
        }}
      >
        <Typography variant="p">My Cart</Typography>
        <Typography variant="p">3 Items</Typography>
      </Paper>

      <Paper
        sx={{
          boxShadow: "none",
          alignItems: "center",
          margin: "40px 55px",
          backgroundColor: "inherit",
        }}
      >
        <hr />
      </Paper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MyCart />
        <CartSideBar/>
      </Box>
    </div>
  );
};

export default MyCarts;
