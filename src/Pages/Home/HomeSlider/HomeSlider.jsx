import React from "react";
import image from "../../../Assests/sliderImage/1.png";
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
  const isMobile = useMediaQuery("(max-width:600px)");
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: `${
                  isMobile ? "space-between" : "space-around"
                }`,
                backgroundColor: "#EBEBEB",
                padding: `${isMobile ? "40px" : "10px"}`,
              }}
              className={classes.SliderContainer}
            >
              <Box>
                <Typography
                  className={classes.textYear}
                  variant="p"
                  sx={{
                    color: "black",
                    textTransform: "uppercase",
                    width: "50%",
                  }}
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <br />
                <Typography
                  className={classes.textSale}
                  variant="p"
                  sx={{
                    // fontSize: `${isMobile ? "20px" : "56px"}`,
                    fontWeight: "bold",
                  }}
                >
                  {item.secondTitle}
                </Typography>
                <br />
                <Typography
                  className={classes.textSale}
                  variant="p"
                  sx={{
                    // fontSize: `${isMobile ? "20px" : "56px"}`,
                    fontWeight: "bold",
                  }}
                >
                  {item.thirdTitle}
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <img className={classes.img} src={image} alt="" />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
