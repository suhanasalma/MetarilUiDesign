import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import image1 from '../../../Assests/2.jpg'
import { Grow, Tooltip, Rating } from "@mui/material";
import useStyle from "./CategoryCardStyle";
import { Link } from 'react-router-dom';

const CategoryCard = ({ category ,i}) => {
   console.log(category);
   const { catName, image } = category;
    const classes = useStyle();
  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      item
      xs={6}
      sm={4}
      md={4}
      lg={3}
      xl={2}
      className={classes.movie}
    >
      <Grow timeout={(i + 1) * 250} in key={i}>
      <div className={classes.link}>
        <img
          alt={catName}
          className={classes.image}
          src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
        />
        <Typography
          sx={{ fontSize: "15px" }}
          className={classes.title}
          variant="p"
        >
          {catName}
        </Typography>
      </div>
      </Grow>
    </Grid>
  );
};

export default CategoryCard;