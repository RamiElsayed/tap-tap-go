import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function RenderMobileMenu({
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
  pages,
  logged,
}) {
  function loggedOptions() {
    let propsOptions = pages.map((page) => (
      <Button
        onClick={handleCloseNavMenu}
        key={page.title}
        sx={{ my: 2, color: "inherit", display: "block" }}
      >
        <Link to={`/${page.directory}`}>{page.title}</Link>
      </Button>
    ));

    return (
      <div>
        {propsOptions}
        <Button sx={{ my: 2, color: "inherit", display: "block" }}>
          Bookmark
        </Button>
      </div>
    );
  }

  function unloggedOptions() {
    return (
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: "inherit", display: "block" }}
      >
        How it works
      </Button>
    );
  }

  return (
    <>
      {/* For mobile */}
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {logged ? loggedOptions() : unloggedOptions()}
        </Menu>
      </Box>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <Typography
          variant="h5"
          noWrap
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
          }}
        >
          TAPTAP GO
        </Typography>
      </Link>
    </>
  );
}
