import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  categoryContainer: {
    display: "flex",
    flexWrap: "wrap",

    overflow: "hidden",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  shopCategoryContainer: {
    padding: "80px",
    [theme.breakpoints.down("md")]: {
      padding: "0 30px 30px 30px",
    },
  },
}));
