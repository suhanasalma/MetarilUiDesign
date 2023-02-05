import React from "react";
import {
 
 
  Grid,
 
} from "@mui/material";

import useStyle from "./CommonCategoryCardsStyle";
import CommonCategoryCard from "./CommonCategoryCard";

const CommonCategoryCards = ({ categories }) => {



  const classes = useStyle();
  const link = "/productsUnderSubCat";
  return (
    <Grid  spacing={{ xs: 2, md: 3, lg: 2, xl: 3 }} container className={classes.categoryContainer}>
      {categories?.map((category, i) => (
        <CommonCategoryCard links={link} category={category} i={i} key={i} />
      ))}
    </Grid>
  );
};

export default CommonCategoryCards;
