import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Grid,
  Grow,
  IconButton,
  Paper,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import image3 from "../../../Assests/3.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import useStyle from "./SpecialOfferStyle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/CartInfo/cartActions";
import { useState } from "react";
import { useEffect } from "react";

const SpecialOffer = ({ item, i }) => {
  const classes = useStyle();
  const isMobile = useMediaQuery("(max-width:900px)");

  const smallIcon = useMediaQuery("(max-width:500px)");
  const [cart, setCart] = useState([]);

  const { name, single_image, price, oldPrice, quantity ,seo} = item;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
   

    
  };
console.log(item);


  


  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={4}
      lg={4}
      xl={3}
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
         <Link to={`/productdetails/${seo}`}>
         <img alt={name} className={classes.image} src={single_image} /></Link>
          <Typography className={classes.title} variant="p">
            {name}
          </Typography>
          <Paper
            sx={{
              display: "flex",
              // justifyContent: "space-between",
              gap: "10px",
              alignItems: "center",
              boxShadow: "none",
            }}
          >
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "5px", color: "red" }}
            >
              ${price}.00
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{
                fontSize: "16px",
                marginTop: "5px",
                color: "gray",
                textDecoration: "line-through",
                fontWeight: "bold",
              }}
            >
              ${oldPrice}.00
            </Typography>
          </Paper>
          <Paper onClick={() => handleAddToCart(item)}
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
                fontWeight: "bold",
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

export default SpecialOffer;
