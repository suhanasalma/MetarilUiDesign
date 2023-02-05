import React from "react";
import CommonTitle from "../../SharedPages/CommonTitle/CommonTitle";
import { Box, Button,  Grid, } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import useStyle from "./SpecialOffersStyle";
import CommonProdctCard from "../../SharedPages/CommonProdctCarts/CommonProdctCard";


const SpecialOffers = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch("AllProducts.json")
      .then((res) => res.json())
      .then((data) => {
        const fituredProducts = data.filter((item) => item.specialOffer);
        setFeatured(fituredProducts);
      });
  }, []);

  const classes = useStyle();

  return (
    <Box
      className={classes.FeaturedContainer}
      sx={{ boxShadow: "none", backgroundColor: "#383838", margin: "50px 0" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "45px",
          padding: "10px",
        }}
      >
        <CommonTitle
          sx={{ color: "white" }}
          title="Special Offers Just For You"
        ></CommonTitle>
        <Button sx={{ color: "white", fontWeight: "bold" }}>
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

export default SpecialOffers;
