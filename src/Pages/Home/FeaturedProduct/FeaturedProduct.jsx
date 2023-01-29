

import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Grow, IconButton, Tooltip } from "@mui/material";
import image3 from '../../../Assests/3.jpg'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from 'react-router-dom';
import useStyle from "./FeaturedProductStyle";


const FeaturedProduct = ({ item ,i}) => {
    const classes = useStyle();

   const { title, img, price } = item;
  
  return (
   
    <Grid item xs={6} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow timeout={(i + 1) * 250} in key={i}>
        <Box sx={
          {
            position:"relative"
          }
        } className={classes.link}>
          <IconButton
            sx={{ position: "absolute", left: "170px" ,top:"25px" }}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <img alt={title} className={classes.image} src={image3} />
          <Typography className={classes.title} variant="p">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{ fontWeight: "bold", marginTop: "5px" }}
          >
            ${price}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              border: "1px solid purple",
              padding: "2px 5px",
              width: "100%",
              marginTop: "10px",
              color: "purple",
              fontWeight: "bold",
              "&:hover": {
                border: "1px solid purple",
              },
            }}
          >
            {" "}
            Add To Cart
          </Button>
        </Box>
      </Grow>
    </Grid>
  );
};

export default FeaturedProduct;