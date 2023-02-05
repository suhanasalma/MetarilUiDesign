import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
  toolbar: {
    height: "90px",
    display: "flex",
    justifyContent: "space-between",
  
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      marginLeft: 0,
    },
  },
  app: {
    
    [theme.breakpoints.up("md")]: {
      padding: "0 50px",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      flexShrink: 0,
    },
  },
  drawerPaper: {
   
    width: "100%",
  },
  linkButton: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    fontSize: "13px",

    "&:hover": {
     
      color: "#6D41B4",
    },
  },
  activeLink: {
    color: "#6D41B4",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "13px",
  },
}));
