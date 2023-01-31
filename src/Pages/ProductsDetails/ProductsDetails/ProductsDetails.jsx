import { KeyboardArrowRight } from '@mui/icons-material';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import FeaturedProducts from '../../Home/FeaturedProduct/FeaturedProducts';
import ProductSlider from '../ProductsSlider/ProductSlider';
import ProductDetails from './ProductDetails';

const ProductsDetails = () => {
  const isMobile = useMediaQuery('(max-width:775px)');
  return (
    <Box sx={{ background: '#EBEBEB' }}>
      <Paper
        sx={{
          boxShadow: 'none',
          alignItems: 'center',
          marginBottom: '40px',
          backgroundColor: 'inherit',
        }}
      >
        <hr />
      </Paper>
    {!isMobile &&  <Paper
        sx={{
          display: 'flex',
          boxShadow: 'none',
          alignItems: 'center',
          margin: '0px  60px',
          backgroundColor: 'inherit',
        }}
      >
        <Typography>Home</Typography>
        <KeyboardArrowRight />
        <Typography>Men</Typography>
        <KeyboardArrowRight />
        <Typography>T-shirt</Typography>
        <KeyboardArrowRight />
        <Typography>Men</Typography>
        <KeyboardArrowRight />
        <Typography>Defiant men t-shirt</Typography>
      </Paper>}
     {
      !isMobile &&  <Paper
      sx={{
        boxShadow: 'none',
        alignItems: 'center',
        margin: '40px 55px',
        backgroundColor: 'inherit',
      }}
    >
      <hr />
    </Paper>
     }
      <Box
        sx={{
          display: 'flex',
          flexDirection: `${isMobile ? 'column' : 'row'}`,
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <ProductSlider />
        <ProductDetails />
      </Box>
   {!isMobile &&   <FeaturedProducts/>}
    </Box>
  );
};

export default ProductsDetails;
