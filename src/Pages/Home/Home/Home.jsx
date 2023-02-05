
import { Box,} from "@mui/material";
import React from "react";
import FeaturedProducts from "../FeaturedProduct/FeaturedProducts";
import HomeSlider from "../HomeSlider/HomeSlider";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SpecialOffers from "../SpecialOffer/SpecialOffers";

const Home = () => {
  
  return (
    <Box sx={{ backgroundColor: "#F7F7F7" }}>
      <HomeSlider />
      <ShopByCategory />
      <FeaturedProducts />
 
       <SpecialOffers/>
   

      <FeaturedProducts />
    </Box>
  );
};

export default Home;
