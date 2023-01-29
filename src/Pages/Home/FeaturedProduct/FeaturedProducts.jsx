import React from "react";
import CommonTitle from "../../SharedPages/CommonTitle/CommonTitle";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontWeight } from "@mui/system";
import FeaturedProduct from "./FeaturedProduct";
import useStyle from "./FeaturedProductsStyle";


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

  console.log(featured);
  const classes = useStyle();

  return (
    <Container style={{ maxWidth: "1500px", marginTop: "100px" }}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CommonTitle title="Featured products"></CommonTitle>
          <Button sx={{ color: "black", fontWeight: "bold" }}>
            See All <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
          </Button>
        </Box>

        <Grid
          spacing={{ xs: 4, md: 3,lg:0 }}
          container
          className={classes.productsContainer}
        >
          {featured?.map((item, i) => (
            <FeaturedProduct item={item} i={i} key={i} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturedProducts;
