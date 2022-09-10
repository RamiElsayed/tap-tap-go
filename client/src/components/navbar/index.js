import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";

import RenderMobileMenu from "./sub-components/RenderMobileMenu";
import RenderMenu from "./sub-components/RenderMenu";
import AvatarMenu from "./sub-components/AvatarMenu";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const settings = ["Account", "Dashboard", "Logout"];

const ResponsiveAppBar = ({ signInStateOpener }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [logged, setLogged] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const pages = logged
    ? ["How it works?", "Add event", "Bookmark"]
    : ["How it works?"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color="transparent" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* For mobile */}
          <RenderMobileMenu
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
            pages={pages}
          />
          {/* For Desktop */}
          <RenderMenu handleCloseNavMenu={handleCloseNavMenu} pages={pages} />
          {logged ? (
            <Toolbar>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  marginRight: "1rem",
                }}
              >
                <Button sx={{ my: 2, color: "inherit", display: "block" }}>
                  <Link to="/new-event">How it works</Link>
                </Button>
                <Button sx={{ my: 2, color: "inherit", display: "block" }}>
                  <Link style={{ textDecoration: "none" }} to="/new-event">
                    Add event
                  </Link>
                </Button>
                <Button sx={{ my: 2, color: "inherit", display: "block" }}>
                  Bookmark
                </Button>
              </Box>
              <AvatarMenu
                handleCloseUserMenu={handleCloseUserMenu}
                handleOpenUserMenu={handleOpenUserMenu}
                anchorElUser={anchorElUser}
                settings={settings}
              />
            </Toolbar>
          ) : (
            <Stack direction="row" spacing={2}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  marginRight: "1rem",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "inherit", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Button
                variant="secondary"
                onClick={signInStateOpener}
                startIcon={<LoginIcon />}
              >
                Sign In
              </Button>
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
