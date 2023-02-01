import React, { useState } from "react";
import {
  AppBar,
  IconButton,

  Toolbar,
  Drawer,
  useMediaQuery,
  Icon,
  Typography,
  Box,
  CardMedia,
  Paper,
  InputBase,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from '@mui/icons-material/Search';


import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import { Menu, } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import useStyles from "./Navstyles";

import Sidebar from "./SideBar/Sidebar";
import logo from '../../../Assests/Logo/logo.png'
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";


const Navbar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
    const [open, setOpen] = useState(false);


  const navMenu = [
   {link:"/home",name:'Home'},
   {link:"/men",name:'Men'},
   {link:"/women",name:'Women'},
   {link:"/clothes",name:'Kids'},
   {link:"/carts",name:'My Cart'},
  ]
  return (
    <>
      <AppBar
        className={classes.app}
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
        }}
        position="static"
        // position="fixed"
      >
        <Toolbar className={classes.toolbar}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={logo} alt="" />
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bolder", fontSize: "20px" }}
            >
              Defiant
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", gap: "10px", textTransform: "uppercase" }}
          >
            {!isMobile &&
              navMenu.map((menu, i) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${classes.activeLink}` : `${classes.linkButton}`
                  }
                  to={menu.link}
                  key={i}
                >
                  {menu.name}
                </NavLink>
              ))}
          </Box>

          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <IconButton
                size="large"
                aria-label="show 1 new notifications"
                color="black"
              >
                <Badge badgeContent={1} color="error">
                  <LocalMallOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="start"
                style={{ outline: "none" }}
                onClick={() =>
                  setMobileOpen((prevMobileOpen) => !prevMobileOpen)
                }
                // className={[classes.menuButton, classes.btn]}
              >
                <Menu />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                // border: "1px solid",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              color="black"
            >
              {/* <input type="text" /> */}
              <Paper
                sx={{
                  // border: "1px solid",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "none",
                  backgroundColor: `${open && "#EBEBEB"}`,
                  color: "black",
                }}
              >
                <IconButton
                  onClick={() => setOpen(!open)}
                  size="large"
                  color="inherit"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, display: `${open ? "inline" : "none"}` }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "Search" }}
                />
              </Paper>

              <IconButton
                size="large"
                aria-label="show 1 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <LocalMallOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                sx={{ marginRight: "5px" }}
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <Person2OutlinedIcon />
              </IconButton>
              {!isMobile && <>Hi Jack &nbsp;</>}
            </Box>
          )}
        </Toolbar>
       {isMobile&& <Paper
          sx={{
            // border: "1px solid",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "none",
            backgroundColor:" #EBEBEB",
            color: "black",
            width: "90%",
            margin: "50px auto",
            borderRadius:""
          }}
        >
          <IconButton
           
            size="large"
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "Search" }}
          />
        </Paper>}
      </AppBar>
      <div>
        <nav className={[classes.drawer]}>
          {isMobile && (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen}></Sidebar>
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
