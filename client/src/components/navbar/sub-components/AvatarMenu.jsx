import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Auth from "../../../utils/auth";

export default function AvatarMenu({
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
  avatar,
}) {
  console.log(avatar);
  return (
    <Box>
      <Tooltip title="avatar">
        <IconButton onClick={handleOpenUserMenu} sx={{ padding: "0" }}>
          <Avatar alt="avatar" src={avatar} sx={{ width: 50, height: 50 }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem>
          <Link sx={{ textDecoration: "none" }} to={`/user/${1}`}>
            Dashboard
          </Link>
        </MenuItem>
        <MenuItem>
          <Typography onClick={() => Auth.logout()}>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
