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
            <AvatarMenu
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
              anchorElUser={anchorElUser}
              settings={settings}
            />
          ) : (
            <Stack direction="row" spacing={2}>
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
