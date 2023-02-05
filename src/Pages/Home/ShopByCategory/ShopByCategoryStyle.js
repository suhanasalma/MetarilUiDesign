import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  categoryContainer: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItem:"center"
    },
  },
  shopCategoryContainer: {
    padding: "80px",
    [theme.breakpoints.down("md")]: {
      padding: "0 20px 20px 20px",
    },
  },
}));
