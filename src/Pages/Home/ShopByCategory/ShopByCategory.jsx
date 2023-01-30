import React from 'react';
import CommonTitle from '../../SharedPages/CommonTitle/CommonTitle';
import { Box, Button, Container, Grid, Paper, useMediaQuery } from "@mui/material";
import { useState } from 'react';
import { useEffect } from 'react';
// import CategoryCard from './CategoryCard';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontWeight } from '@mui/system';
// import Container from '@mui/material/Container';
import useStyle from "./ShopByCategoryStyle";
import CommonCategoryCards from '../../SharedPages/CommonCategoryCard/CommonCategoryCards';

const ShopByCategory = () => {
   const [categories,setCategories] = useState([])
    const isMobile = useMediaQuery("(max-width:900px)");
   useEffect(()=>{
      fetch("category.json")
        .then((res) => res.json())
        .then((data) => setCategories(data));
   },[])

 
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
       <CommonCategoryCards categories ={categories}/>

       
     </Box>
   );
};

export default ShopByCategory;