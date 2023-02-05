import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { useSelector } from 'react-redux';
import CartSideBar from '../CartSideBar/CartSideBar';
import MyCart from './MyCart';



const MyCarts = () => {



  const cartItems = useSelector(state=>state.CartItems)



  let totalQuantity = 0
if(cartItems){
  for (let product of cartItems) {
   
    totalQuantity += product.quantity;
  }
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
        <Typography variant="p">{totalQuantity} Items</Typography>
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
        <Box sx={{width:"70%"}}>
        { cartItems.length? 
          cartItems?.map((item,i)=> <MyCart item={item} key={i}/>):"Carts empty"
        }

        </Box>
       
        <CartSideBar/>
      </Box>
    </div>
  );
};

export default MyCarts;
