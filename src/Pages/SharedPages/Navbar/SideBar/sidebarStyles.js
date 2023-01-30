import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  TextLink: {
    padding: "10% 0",
    textDecoration: "none",
    color: "black",
    
  },

  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
  },
}));
