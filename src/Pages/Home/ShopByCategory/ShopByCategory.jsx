import React from 'react';
import CommonTitle from '../../SharedPages/CommonTitle/CommonTitle';
import { Box, Button } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useStyle from "./ShopByCategoryStyle";
import CommonCategoryCards from '../../SharedPages/CommonCategoryCard/CommonCategoryCards';
import { useGetProductsCategoryQuery } from '../../../Redux/ProductApi/productsApiSlice';

const ShopByCategory = () => {
  

   const Allcategories = useGetProductsCategoryQuery()
   let categories = Allcategories?.data?.category.slice(0,4);


 
      const classes = useStyle();
   return (
     <Box className={classes.shopCategoryContainer} sx={{}}>
       <Box
         sx={{
           display: "flex",
           justifyContent: "space-between",
           marginBottom: "45px",
         }}
       >
         <CommonTitle title="Shop by category"></CommonTitle>
         <Button sx={{ color: "black", fontWeight: "bold" }}>
           See All <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
         </Button>
       </Box>
       <CommonCategoryCards categories={categories} />
     </Box>
   );
};

export default ShopByCategory;