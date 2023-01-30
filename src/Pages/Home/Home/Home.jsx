import { Box } from "@mui/material";
import React from "react";
import FeaturedProducts from "../FeaturedProduct/FeaturedProducts";
import HomeSlider from "../HomeSlider/HomeSlider";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  // const isMobile = useMediaQuery("(max-width:900px)");
  
  return (
    <Box sx={{ backgroundColor: "#F7F7F7" }}>
      <HomeSlider />
      <ShopByCategory />
      <FeaturedProducts />
      <FeaturedProducts />
      <FeaturedProducts />
    </Box>
  );
};

export default Home;