/** @format */

import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import { DrawerHeader } from "./DrawerHeader";
import { Drawer, ListItemButton, Tooltip } from "@mui/material";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import history from "../services/History";

export default function Sidebar() {

    let menuList = [
        { text:"Notes", path:"/notes", icon: <NoteAltIcon /> },
        { text:"Todo", path:"/todo", icon: <ListAltIcon /> },
        { text:"profile", path:"/profile", icon: <AccountCircleIcon /> },
        { text:"Logout", path:"/", icon: <LogoutIcon /> },
    ]

  return (
    <>
    <Drawer variant="permanent" open={false} style={{ width:64, flexShrink:0, whiteSpace:"nowrap" }} >
      <DrawerHeader />
      <Divider />
      <List>
        {menuList.map((menu, index) => (
        <Tooltip 
        key={menu.text} title={menu.text} placement="right" arrow>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
            }}
            onClick={() => history.push(menu.path)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr:"auto",
                justifyContent: "center",
              }}
            >
              {menu.icon}
            </ListItemIcon>
          </ListItemButton>
        </Tooltip>
        ))}
      </List>
    </Drawer>
    </>
  );
}
