import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function AvatarMenu({
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
}) {
  return (
    <Box>
      <Tooltip>
        <IconButton onClick={handleOpenUserMenu} sx={{ padding: "0" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          <Link style={{ textDecoration: "none" }} to={`/user/${1}`}>
            Dashboard
          </Link>
        </MenuItem>
        <MenuItem>
          <Typography to={`/user/${1}`}>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
