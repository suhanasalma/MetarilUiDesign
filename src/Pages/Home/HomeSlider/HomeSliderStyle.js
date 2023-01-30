import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  SliderContainer: {
    // marginBotom: "20px",
    // display: "flex",
    // justifyContent: "center",
    height: "500px",
    textDecoration: "none",
    overflow: "hidden",
    marginBottom: "25px",
    [theme.breakpoints.down("md")]: {
      height: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "130px",
    },
  },
  textYear: {
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  textSale: {
    fontSize: "56px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "",
    // marginLeft:"50px",
    alignItems: "center",
    // flexDirection: "column",
  },

  cardContent: {
    color: "#ffffff",
    width: "100%",
    marginLeft: "50%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%",
    },
  },
  cardContentRoot: {
    position: "relative",
    backgroundColor: "transparent",
  },

  img: {
    marginTop: "130px",
    overflow: "hidden",
    width: "80%",
    objectFit: "cover",
    objectPosition: " center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      width: "100%",
    },
  },
}));
