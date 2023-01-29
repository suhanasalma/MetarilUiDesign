import { makeStyles } from "@mui/styles";
const drawerWidth = 240;
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
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
    [theme.breakpoints.up("sm")]: {
      dispalay: "none",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    "&:hover": {
      color: "white !important",
      textDecoration: "none",
    },
  },
}));
