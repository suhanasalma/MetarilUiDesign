import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  link: {

    textDecoration: "none",
    padding: "10px",
    backgroundColor: "white",

    borderRadius: "5px",
    margin: "auto",

    [theme.breakpoints.down("md")]: {
      maxWidth: "290px",
      padding: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      padding: "5px",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  priceContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "start",
    },
  },

  image: {
    borderRadius: "5px",

    width: "100%",

    marginBottom: "10px",
    padding: "0px",

    objectFit: "cover",
    objectPosition: " top",
  },


}));
