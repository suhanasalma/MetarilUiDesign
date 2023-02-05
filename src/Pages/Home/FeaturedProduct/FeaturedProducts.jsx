import React from "react";
import CommonTitle from "../../SharedPages/CommonTitle/CommonTitle";
import { Box, Button, Grid,  } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import useStyle from "./FeaturedProductsStyle";
import CommonProdctCard from "../../SharedPages/CommonProdctCarts/CommonProdctCard";


const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch("AllProducts.json")
      .then((res) => res.json())
      .then((data) => {
         const fituredProducts = data.filter((item) => item.isFeatured);
         setFeatured(fituredProducts)
      });
  }, []);

 
  const classes = useStyle();

  return (
    <Box
      className={classes.FeaturedContainer}
      
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "45px",
          
        }}
      >
        <CommonTitle title="Featured products"></CommonTitle>
        <Button sx={{ color: "black", fontWeight: "bold" }}>
          See All <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
        </Button>
      </Box>

      <Grid
        spacing={{ xs: 2, md: 3, lg: 2, xl: 3 }}
        container
        className={classes.productsContainer}
       
      >
        {featured?.slice(0, 4).map((item, i) => (
          <CommonProdctCard item={item} i={i} key={i} />
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
