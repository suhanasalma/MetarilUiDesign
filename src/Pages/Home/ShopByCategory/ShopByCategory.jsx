import React from 'react';
import CommonTitle from '../../SharedPages/CommonTitle/CommonTitle';
import { Box, Button, Container, Grid, Paper, useMediaQuery } from "@mui/material";
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryCard from './CategoryCard';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontWeight } from '@mui/system';
// import Container from '@mui/material/Container';
import useStyle from "./ShopByCategoryStyle";

const ShopByCategory = () => {
   const [categories,setCategories] = useState([])
    const isMobile = useMediaQuery("(max-width:900px)");
   useEffect(()=>{
      fetch("category.json")
        .then((res) => res.json())
        .then((data) => setCategories(data));
   },[])

   console.log(categories);
      const classes = useStyle();
   return (
     <Container style={{ maxWidth: "1500px" }}>
       <Box>
         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
           <CommonTitle title="Shop by category"></CommonTitle>
           <Button sx={{ color: "black", fontWeight: "bold" }}>
             See All <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
           </Button>
         </Box>

         <Grid container className={classes.categoryContainer}>
           {!isMobile && categories?.slice(0, 6).map((category, i) => (
             <CategoryCard category={category} i={i} key={i} />
           ))}
           {isMobile && categories?.slice(0, 4).map((category, i) => (
             <CategoryCard category={category} i={i} key={i} />
           ))}
         </Grid>
       </Box>
     </Container>
   );
};

export default ShopByCategory;