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
  Button,
} from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyles from "./sidebarStyles";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import logo from "../../../../Assests/Logo/logo.png";
import { padding } from "@mui/system";
import { useState } from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";


const categories = [
  { link: "", name: "Men" },
  { link: "", name: "Women" },
  { link: "", name: "Kids" },
  { link: "", name: "Sports" },
];
const profile = [
  { link: "", name: "My Orders", icon: EventNoteOutlinedIcon },
  { link: "", name: "My Cart", icon: LocalMallOutlinedIcon },
  { link: "", name: "My Wishlist", icon: FavoriteBorderOutlinedIcon },
];

const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles();
  const [logged,setLogged] = useState(true)

  


  return (
    <Box sx={{ padding: "15px" }}>
      <Box
        className={classes.TextLink}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={logo} alt="" />
          <Typography sx={{ fontWeight: "bold", padding: "15px" }} variant="h6">
            Defiant
          </Typography>
        </Box>
        <CloseIcon
          onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          sx={{ color: "black" }}
        />
      </Box>
      {logged && (
        <Box
          variant="contained"
          sx={{
            width: "100%",
            margin: "40px 0",
            backgroundColor: "#EBEBEB",
            color: "black",
            padding: "16px 30px",
            boxShadow: "none",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Person2OutlinedIcon />
            Jack
          </Box>
          <ArrowForwardIosIcon />
        </Box>
      )}
      <List>
        {categories.map((category, i) => (
          <Box key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <Typography
              style={{ fontWeight: "bold", fontSize: "30px" }}
              variant="h5"
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              key={i}
              className={classes.links}
            >
              {category.name}
            </Typography>
            <ArrowForwardIosIcon />
          </Box>
        ))}
      </List>
      <Divider sx={{ margin: "50px 0" }} />
      <Box>
        <List>
          {profile.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                gap: "10px",
              }}
            >
              <item.icon />
              <Typography
                style={{ fontWeight: "bold", fontSize: "18px" }}
                variant="p"
                onClick={() =>
                  setMobileOpen((prevMobileOpen) => !prevMobileOpen)
                }
                key={i}
                className={classes.links}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </List>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          marginTop: "210px",
          backgroundColor: `${logged ? "#EBEBEB" : "#6D41B4"}`,
          color: `${logged ? "black" : "white"}`,
          padding: "16px 30px",
          boxShadow: "none",
          fontWeight: "bold",
        }}
      >
        {logged ? "Sign Out" : "Sign In"}
      </Button>
    </Box>
  );
};

export default Sidebar;
