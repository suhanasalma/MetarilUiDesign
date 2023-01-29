import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import image1 from '../../../Assests/2.jpg'

const CategoryCard = ({ category }) => {
   console.log(category);
   const { catName, image } = category;
  return (
    <Grid item xs={2} sm={4} md={4} lg={2} key={category.id}>
      <Card
        sx={{
          maxWidth: 255,
          //   minWidth: 150,
          // boxShadow: 'none',
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
          bgcolor: "",
          marginTop: "20px",
          marginBottom: "20px",

          height: "210px",

          mx: "auto",
          "&:hover": {
            boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              // sx={{ maxWidth: "255px", objectFit: "fill", height: 100 }}
              image={image1}
              alt=""
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
              }}
            ></Typography>
            <Typography
              sx={{ color: "black", fontWeight: "bold" }}
              variant="body2"
            >
              {catName}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CategoryCard;