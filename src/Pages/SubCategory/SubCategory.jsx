import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CommonCategoryCards from '../SharedPages/CommonCategoryCard/CommonCategoryCards';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FeaturedProducts from '../Home/FeaturedProduct/FeaturedProducts';
import SpecialOffers from '../Home/SpecialOffer/SpecialOffers';

const SubCategory = () => {
 const [categories, setCategories] = useState([]);
 const isMobile = useMediaQuery("(max-width:900px)")
    useEffect(() => {
      fetch("categoryUnderCategory.json")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
  console.log(categories);
  return (
    <Box sx={{ backgroundColor: "#F7F7F7" }}>
      <Paper
        sx={{
          boxShadow: "none",
          alignItems: "center",
          marginBottom:"60px",
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
          margin: "0px  60px",
          backgroundColor: "inherit",
        }}
      >
        <Typography>Home</Typography>
        <KeyboardArrowRight />
        <Typography>Men</Typography>
      </Paper>
      <Box sx={{ margin: ` ${isMobile ? "60px 20px" : "60px "}` }}>
        <CommonCategoryCards
          links="/productsUnderSubCat"
          categories={categories}
        />
      </Box>
      <FeaturedProducts />
      <SpecialOffers />
      <FeaturedProducts />
    </Box>
  );
};

export default SubCategory;