


import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import image2 from '../../../Assests/2.jpg'
import { Grow, Tooltip, Rating } from "@mui/material";
import useStyle from "./CommonCategoryCardStyles";
import { Link } from 'react-router-dom';

const CommonCategoryCard = ({ category, i }) => {
  const { name, image, id } = category;
  const classes = useStyle();
  let link = `/productsUnderSubCat/${id}`;
  console.log(category);

  return (
    <Grid
      // justifyContent="center"
      // alignItems="center"
      item
      xs={3}
      sm={3}
      md={3}
      lg={3}
      xl={2}
      className={classes.movie}
    >
      <Grow timeout={(i + 1) * 250} in key={i}>
        <Link to={link}>
          <div className={classes.link}>
            <img alt={name} className={classes.image} src={image} />
            <Typography
              sx={{ fontSize: "15px" }}
              className={classes.title}
              variant="p"
            >
              {name}
            </Typography>
          </div>
        </Link>
      </Grow>
    </Grid>
  );
};

export default CommonCategoryCard;