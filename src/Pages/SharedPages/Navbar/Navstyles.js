import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
  toolbar: {
    height: "90px",
    display: "flex",
    justifyContent: "space-between",
    // marginLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      marginLeft: 0,
    },
  },
  app: {
    // marginRight: theme.spacing(2),
    // color: "black",
    [theme.breakpoints.up("md")]: {
      padding: "0 50px",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      // width: drawerWidth,
      width: "100%",
      flexShrink: 0,
    },
  },
  drawerPaper: {
    // width: drawerWidth,
    width: "100%",
  },
  linkButton: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    fontSize: "13px",

    "&:hover": {
      // color: "white !important",
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
