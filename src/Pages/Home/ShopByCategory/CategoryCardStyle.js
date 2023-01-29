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
    padding: "10px",
    maxWidth:"150px",
    height:"190px",
    borderRadius:"5px",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },

  image: {
    borderRadius: "10px",
    height: "100px",
    padding:"10px",
    marginBottom: "10px",
    transition: "ease-in-out .2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "130px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
  },
}));
