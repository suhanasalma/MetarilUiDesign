import { Box } from '@mui/material';
import React from 'react';
import FeaturedProduct from '../../Home/FeaturedProduct/FeaturedProduct';
import FeaturedProducts from '../../Home/FeaturedProduct/FeaturedProducts';
import FilterBars from '../FilterBar/FilterBars';

const AllProducts = () => {
   return (
     <Box
       sx={{
         backgroundColor: "",
         display: "flex",
         justifyContent: "space-between",
       }}
     >
       <Box sx={{ flexGrow: 1 }}><FilterBars/></Box>

     </Box>
   );
};

export default AllProducts;