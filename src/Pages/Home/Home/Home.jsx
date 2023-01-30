
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import FeaturedProducts from "../FeaturedProduct/FeaturedProducts";
import HomeSlider from "../HomeSlider/HomeSlider";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SpecialOffers from "../SpecialOffer/SpecialOffers";

const Home = () => {
  // const isMobile = useMediaQuery("(max-width:900px)");
  
  return (
    <Box sx={{ backgroundColor: "#F7F7F7" }}>
      <HomeSlider />
      <ShopByCategory />
      <FeaturedProducts />
      <Paper sx={{ boxShadow: "none", backgroundColor: "#383838", margin:"50px 0",}}>
       <SpecialOffers/>
      </Paper>

      <FeaturedProducts />
    </Box>
  );
};

export default Home;
