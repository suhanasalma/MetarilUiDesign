import React from 'react';
import CommonTitle from '../../SharedPages/CommonTitle/CommonTitle';
import { Box, Button, Container, Grid, Paper } from "@mui/material";
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

const ShopByCategory = () => {
   const [categories,setCategories] = useState([])
   useEffect(()=>{
      fetch("category.json")
        .then((res) => res.json())
        .then((data) => setCategories(data));
   },[])

   console.log(categories);
   return (
     <Container style={{ maxWidth: "1500px" }}>
       <Box>
         <Box sx={{display:"flex", justifyContent:"space-between"}}>
           <CommonTitle title="Shop by category"></CommonTitle>
           <Button sx={{color:"black" ,fontWeight:"bold"}}>See All <ArrowForwardIcon sx={{marginLeft:"5px"}}/></Button>
         </Box>
         <Grid
           container
           spacing={{ xs: 2, md: 3 }}
           columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}
         >
           {categories.slice(0, 5).map((category) => (
             <CategoryCard category={category}></CategoryCard>
           ))}
         </Grid>
       </Box>
     </Container>
   );
};

export default ShopByCategory;