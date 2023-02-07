



import React, { useEffect } from "react";

import Typography from "@mui/material/Typography";
import {

  Button,
  Grid,
  Grow,
  IconButton,
  Paper,

  useMediaQuery,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import useStyle from "./CommonProdctCardStyle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/CartInfo/cartActions";
import { useGetProductsDetailsQuery } from "../../../Redux/ProductApi/productsApiSlice";


const CommonProdctCard = ({ item, i }) => {
  const classes = useStyle();
  const isMobile = useMediaQuery("(max-width:900px)");

  const smallIcon = useMediaQuery("(max-width:500px)");
  

  const { name, single_image, price, oldPrice, seo } = item;
  console.log(item)
  const dispatch = useDispatch();


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

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
    
    >
      <Grow timeout={(i + 1) * 250} in key={i}>
        <Paper
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
            <img alt={name} className={classes.image} src={single_image} />
          </Link>
          
          <Typography  variant="p">
            {name}
          </Typography>
          <Paper className={classes.priceContainer}
            sx={{
             
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
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
              
              boxShadow: "none",
              marginTop: "10px",
              color: "purple",
              fontWeight: "bold",
              fontSize: "10px",
          
            }}
          >
          
            <Button
              onClick={() => handleAddToCart(item)}
              disabled={item.quantity === 0}
              variant="outlined"
              sx={{width: "100%",
                fontSize: `${smallIcon ? "10px" : "12px"}`,
                fontWeight: "bold",
                color: "purple",
                boxShadow: "none",
                border: "1px solid purple",
                "&:hover": {
              border: "1px solid purple",
              backgroundColor: "transparent",
                },
              }}
            >
               <ShoppingCartIcon
              sx={{ fontSize: `${smallIcon ? "10px" : "20px"}` }}
            />
              {" "}
              Add To Cart
            </Button>
          </Paper>
        </Paper>
      </Grow>
    </Grid>
  );
};

export default CommonProdctCard;
