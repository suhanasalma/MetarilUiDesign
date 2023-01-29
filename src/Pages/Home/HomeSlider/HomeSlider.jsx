import React from "react";
import image from "../../../Assests/1.jpg"
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useStyles from "./HomeSliderStyle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HomeSlider.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import data from "./HomeSliderInfo";

console.log(data);

const HomeSlider = () => {
  const classes = useStyles();
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      modules={[Pagination, Navigation]}
      navigation={true}
      pagination={true}
      loop={true}
      className="mySwiper"
    >
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <Box className={classes.featuredCardContainer}>
            <Card className={classes.card} classes={{ root: classes.cardRoot }}>
              <CardMedia
                media="picture"
                image={item.img}
                title="Hello"
                className={classes.cardMedia}
              />
              <Box padding="20px">
                <CardContent
                  className={classes.cardContent}
                  classes={{ root: classes.cardContentRoot }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "black", textTransform: "uppercase" }}
                    gutterBottom
                  >
                    {item.title}
                    <br />
                    <Box sx={{ fontSize: "56px", fontWeight: "bold" }}>
                      {item.secondTitle}
                    </Box>
                    <Box sx={{ fontSize: "56px", fontWeight: "bold" }}>
                      {item.thirdTitle}
                    </Box>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
