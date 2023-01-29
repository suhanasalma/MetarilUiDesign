import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  CircularProgress,
  ListSubheader,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyles from "./sidebarStyles";


const categories = [
  { link: "", name: "Home" },
  { link: "", name: "Men" },
  { link: "", name: "Women" },
  { link: "", name: "Kids" },
];

const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <>
      <Link to="/" className={classes.TextLink}>
        <Typography
          sx={{ fontWeight: "bold", padding:"15px"}}
          variant="h6"
        >
          {" "}
          Defiant
        </Typography>
      </Link>
      <Divider />
      <List>
        <ListSubheader
          sx={{
            fontWeight: "bold",
           
            color: "black",
            fontSize: "16px",
          }}
        >
          Menus
        </ListSubheader>
        {categories.map((category, i) => (
          <Link
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            to="/"
            key={i}
            className={classes.links}
          >
            <ListItem onClick={() => {}} button>
              <ListItemText primary={category.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
