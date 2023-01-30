import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import image2 from '../../../Assests/2.jpg'
import { Grow, Tooltip, Rating } from "@mui/material";
import useStyle from "./CategoryCardStyle";
import { Link } from 'react-router-dom';

const CategoryCard = ({ category ,i}) => {
 
   const { catName, image } = category;
    const classes = useStyle();
  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      item
      xs={3}
      sm={3}
      md={3}
      lg={3}
      xl={2}
      className={classes.movie}
    >
      <Grow timeout={(i + 1) * 250} in key={i}>
        <div className={classes.link}>
          <img alt={catName} className={classes.image} src={image2} />
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