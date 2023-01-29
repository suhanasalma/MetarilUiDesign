import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBotom: "20px",
    display: "flex",
    justifyContent: "center",
    height: "500px",
    textDecoration: "none",
    marginBottom: "25px",
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "",
    // marginLeft:"50px",
    alignItems: "center",
    // flexDirection: "column",
  },
  cardRoot: {
    position: "relative",
  },
  cardMedia: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.175)",
    backgroundBlendMode: "darken",
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
}));
