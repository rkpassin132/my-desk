/** @format */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Divider, Tooltip } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Sidebar from "../components/Sidebar";
import history from "../services/History";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const logout = () => {
    setAnchorEl(null);
    history.push('/');
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="open drawer"
             sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MyDesk
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Tooltip title="Open settings">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                onClick={(event) => setAnchorEl(event.currentTarget)}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => {history.push('/profile'); setAnchorEl(null);}}>Profile</MenuItem>
        <Divider />
        <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </Menu>

      <Sidebar />
    </>
  );
}
