import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  link: {
    alignItems: "center",
    textDecoration: "none",
    fontWeight: "bolder",
    background: "white",
    padding: "5px",
    maxWidth: "140px",
    height: "160px",
    margin:"auto",
    borderRadius: "5px",

    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      
    },
    [theme.breakpoints.down("sm")]: {
      height: "120px",
      
    },
    "&:hover": {
      cursor: "pointer",
    },
  },

  image: {
    borderRadius: "10px",
    height: "100%",
    width: "60%",
    padding: "5px",
    marginBottom: "10px",
    transition: "ease-in-out .2s",
    objectFit: "contain",

    
    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
  },

}));
