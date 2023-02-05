import { Paper, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Divider from "@mui/material/Divider";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import {
  decreaseFromCart,
  increaseFromCart,
  removeItem,
} from "../../../Redux/CartInfo/cartActions";
import { useGetProductsDetailsQuery } from "../../../Redux/ProductApi/productsApiSlice";

const MyCart = ({ item }) => {
  const dispatch = useDispatch();
  const product = useGetProductsDetailsQuery(item.seo)?.data?.product

 

  const handleONClick = (item) => {

    dispatch(removeItem(item));
  };

  const handleIncrease = (item) => {
 
    if(product.quantity === item.quantity){
      alert('item not available')
    }else{
      dispatch(increaseFromCart(item));
    }
  
  };
  const handleDecrease = (item) => {

    if(item.quantity>1){
      dispatch(decreaseFromCart(item));
    }else{
      dispatch(removeItem(item));
     
    }

    
  };

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FormControlLabel
        onClick={() => handleONClick(item)}
        control={<Checkbox />}
        // label="Disabled"
      />
      <img src={item?.single_image} style={{ width: "50px" }} alt="Image" />
      <Typography variant="p">{item?.name}</Typography>

      <Box
        sx={{
          padding: "px",
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          borderColor: "purple",
          height: "44px",
  
          color: "purple",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <AddIcon
          onClick={() => handleIncrease(item)}
          sx={{ width: "15px", fontWeight: "bold" }}
        />
        <Divider
          style={{ background: "purple" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <Typography variant="div" sx={{ width: "20px", textAlign: "center" }}>
          {item?.quantity}
        </Typography>
        <Divider
          style={{ background: "purple" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <RemoveIcon
          onClick={() => handleDecrease(item)}
          sx={{ width: "15px", fontWeight: "bold" }}
        />
      </Box>
      <Typography variant="p">{item?.price}</Typography>
    </Paper>
  );
};

export default MyCart;
