import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  link: {
    //  alignItems: "center",
    textDecoration: "none",
    padding: "10px",
    backgroundColor: "white",

    borderRadius: "5px",
    maxWidth: "244px",
    maxHeight: "430px",
    margin:"auto",

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


  image: {
    borderRadius: "5px",
    height: "280px",
    width: "100%",

    marginBottom: "10px",
    padding: "0px",
    // objectFit: "scale-down",
    objectFit: "cover",
    objectPosition: " top",
  },

  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: 0,
    //  textAlign: "center",
  },
}));
