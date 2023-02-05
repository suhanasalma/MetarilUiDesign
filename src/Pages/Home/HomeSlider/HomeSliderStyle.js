import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  SliderContainer: {

    height: "500px",
    textDecoration: "none",
    overflow: "hidden",
    marginBottom: "25px",

    [theme.breakpoints.down("md")]: {
      height: "320px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  },

  img: {
    overflow: "hidden",
    objectFit: "fill",
    objectPosition: " center",
    marginTop: "-100px",
    width: "100%",
  
  
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",

      marginTop: "-50px",
      
    },
  },
}));