

import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, IconButton } from "@mui/material";
import image3 from '../../../Assests/3.jpg'
import FavoriteIcon from "@mui/icons-material/Favorite";


const FeaturedProduct = ({ item }) => {

   const { title, img, price } = item;
  
  return (
    <Grid item xs={2} sm={4} md={4} lg={2} key={item.id}>
      <Card
        sx={{
         //  maxWidth: 255,
          //   minWidth: 150,
          // boxShadow: 'none',
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
          bgcolor: "",
          marginTop: "20px",
          marginBottom: "20px",

          height: "380px",

          mx: "auto",
          "&:hover": {
            boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CardContent
          sx={{
            fontWeight: "bold",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <IconButton
              sx={{ position: "absolute",left:"170px" }}
              aria-label="add to favorites"
            >
              <FavoriteIcon />
            </IconButton>
            <CardMedia
              component="img"
              sx={{ height: 245 }}
              image={image3}
              alt=""
            />

            <Typography
              sx={{ color: "black", marginTop: "5px" }}
              variant="body2"
            >
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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FeaturedProduct;