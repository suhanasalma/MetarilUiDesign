import React from "react";
import image from "../../../Assests/sliderImage/4.jpg";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
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
    <section>
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
           
            <Box className={classes.SliderContainer}>
              <img className={classes.img} src={image} alt="" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
