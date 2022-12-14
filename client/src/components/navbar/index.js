import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";

import { useModalsContext } from "../../utils/ModalContext";
import RenderMobileMenu from "./sub-components/RenderMobileMenu";
import RenderLogo from "./sub-components/RenderLogo";
import AvatarMenu from "./sub-components/AvatarMenu";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import { QUERY_USER_AVATAR } from "../../graphQL/queries";
import { useQuery } from "@apollo/client";

const Navbar = () => {
  const { openModal, openBookmarkModal } = useModalsContext();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [logged, setLogged] = useState(Auth.loggedIn());
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [avatar, setAvatar] = useState("");

  let tokenUserId = "";
  if (logged) {
    tokenUserId = Auth.getProfile()?.data._id;
  }

  const { loading, data } = useQuery(
    QUERY_USER_AVATAR,
    {
      variables: { userId: tokenUserId },
    },
    { enabled: Auth.loggedIn() }
  );

  useEffect(() => {
    if (data?.user?.profileAvatar) {
      setAvatar(data.user.profileAvatar);
    }
  }, [data]);

  const pages = logged
    ? [
        { title: "How it works?", directory: "How-it-works" },
        { title: "Add event", directory: "new-event" },
      ]
    : [{ title: "How it works?", directory: "How-it-works" }];

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

  function loggedOptions() {
    return (
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            marginRight: "1rem",
          }}
        >
          {pages.map((page) => (
            <Button
              onClick={handleCloseNavMenu}
              key={page.title}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/${page.directory}`}
              >
                {page.title}
              </Link>
            </Button>
          ))}

          <Button
            onClick={openBookmarkModal}
            sx={{ my: 2, color: "inherit", display: "block" }}
          >
            Bookmark
          </Button>
        </Box>
        <AvatarMenu
          handleCloseUserMenu={handleCloseUserMenu}
          handleOpenUserMenu={handleOpenUserMenu}
          anchorElUser={anchorElUser}
          avatar={avatar}
        />
      </Toolbar>
    );
  }

  function unloggedOptions() {
    return (
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            marginRight: "1rem",
          }}
        >
          <Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "inherit",
              display: "block",
              textDecoration: "none",
            }}
          >
            <Link to={`/How-it-works`}> How it works</Link>
          </Button>
        </Box>
        <Button
          variant="secondary"
          onClick={openModal}
          startIcon={<LoginIcon />}
        >
          Sign In
        </Button>
      </Stack>
    );
  }

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
            logged={logged}
          />
          {/* For Desktop */}
          <RenderLogo />
          {logged ? loggedOptions() : unloggedOptions()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
