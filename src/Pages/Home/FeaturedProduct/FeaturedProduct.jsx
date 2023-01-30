

import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Grow, IconButton, Paper, Tooltip, useMediaQuery } from "@mui/material";
import image3 from '../../../Assests/3.jpg'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from 'react-router-dom';
import useStyle from "./FeaturedProductStyle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const FeaturedProduct = ({ item ,i}) => {
    const classes = useStyle();
    const isMobile = useMediaQuery("(max-width:900px)");

    const smallIcon = useMediaQuery("(max-width:500px)");

   const { title, img, price } = item;
  
  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={4}
      lg={4}
      xl={3}
      wrap
      justifyContent="center"
      alignItems="center"
      className={classes.movie}
    >
      <Grow timeout={(i + 1) * 250} in key={i}>
        <Box
          sx={{
            p: 2,
            position: "relative",
          }}
          className={classes.link}
        >
          <IconButton
            sx={{
              backgroundColor: "white",
              position: "absolute",
              left: `${isMobile ? "" : "160px"}`,
              top: "25px",
            }}
            aria-label="add to favorites"
          >
            <FavoriteIcon sx={{}} />
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
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid purple",
              padding: "2px 5px",
              width: "100%",
              boxShadow: "none",
              marginTop: "10px",
              color: "purple",
              fontWeight: "bold",
              fontSize: "10px",
              "&:hover": {
                border: "1px solid purple",
              },
            }}
          >
            <ShoppingCartIcon
              sx={{ fontSize: `${smallIcon ? "10px" : "20px"}` }}
            />
            <Button
              variant="outlined"
              sx={{
                fontSize: `${smallIcon ? "10px" : "12px"}`,
               fontWeight:"bold",
                color: "purple",
                boxShadow: "none",
                border: "none",
                "&:hover": {
                  border: "none",
                  backgroundColor: "transparent",
                },
              }}
            >
              {" "}
              Add To Cart
            </Button>
          </Paper>
        </Box>
      </Grow>
    </Grid>
  );
};

export default FeaturedProduct;