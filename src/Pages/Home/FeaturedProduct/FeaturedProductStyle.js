import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";

export default makeStyles((theme) => ({
  movie: {
    //  padding: "10px",
  },
  link: {
    //  alignItems: "center",
    textDecoration: "none",
    padding: "10px",
    backgroundColor: "white",

    borderRadius: "5px",

    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "250px",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },

  image: {
    borderRadius: "20px",
    height: "300px",
    marginBottom: "10px",
    padding: "10px",
    objectFit: "contain",
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
