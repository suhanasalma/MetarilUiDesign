import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  productsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems:"center",

    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  FeaturedContainer: {
    padding: "0 80px 80px 80px",
    [theme.breakpoints.down("md")]: {
      padding: "0 20px 20px 20px",
    },
  },
}));
