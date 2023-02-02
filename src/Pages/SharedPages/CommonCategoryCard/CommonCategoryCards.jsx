import React from "react";
import CommonTitle from "../../SharedPages/CommonTitle/CommonTitle";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
// import CategoryCard from "./CategoryCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontWeight } from "@mui/system";
// import Container from '@mui/material/Container';
import useStyle from "./CommonCategoryCardsStyle";
import CommonCategoryCard from "./CommonCategoryCard";

const CommonCategoryCards = ({ categories }) => {
  //   const [categories, setCategories] = useState([]);
  const isMobile = useMediaQuery("(max-width:900px)");

  const classes = useStyle();
  const link = "/productsUnderSubCat";
  return (
    <Grid container className={classes.categoryContainer}>
      {categories?.map((category, i) => (
        <CommonCategoryCard links={link} category={category} i={i} key={i} />
      ))}
    </Grid>
  );
};

export default CommonCategoryCards;
