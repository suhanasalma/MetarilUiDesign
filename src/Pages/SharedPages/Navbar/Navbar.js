import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Avatar,
  Button,
  Tooltip,
  Toolbar,
  Drawer,
  useMediaQuery,
  Icon,
  Typography,
  Box,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from '@mui/icons-material/Search';
// import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  MenuIcon,
  Menu,
 
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import useStyles from "./Navstyles";
import { useTheme } from "@mui/material/styles";
import Sidebar from "./SideBar/Sidebar";

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const isAuthenticated = true;

  const navMenu = [
   {link:"",name:'Home'},
   {link:"",name:'Men'},
   {link:"",name:'Women'},
   {link:"",name:'Kids'}
  ]
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          padding: "0 100px",
        }}
        position="fixed"
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" sx={{ color: "black" }}>
            Defiant
          </Typography>
          <Box
            sx={{ display: "flex", gap: "10px", textTransform: "uppercase" }}
          >
            {!isMobile &&
              navMenu.map((menu, i) => (
                <Link to="/" className={classes.linkButton} key={i}>
                  {menu.name}
                </Link>
              ))}
          </Box>

          {!isMobile && (
            <Box
              color="black"
              // component={Link}
              // to="/profile/:id"
              className={classes.linkButton}
              // onClick={() => {}}
            >
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
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
                <AccountCircleOutlinedIcon />
              </IconButton>
              {!isMobile && <>Hi Jack &nbsp;</>}
            </Box>
          )}

          {isMobile && (
            <>
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
                className={classes.menuButton}
              >
                <Menu />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
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
