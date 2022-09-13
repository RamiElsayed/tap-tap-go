import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';

import RenderMobileMenu from './sub-components/RenderMobileMenu';
import RenderLogo from './sub-components/RenderLogo';
import AvatarMenu from './sub-components/AvatarMenu';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Navbar = ({ openModal }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [logged, setLogged] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const pages = logged
    ? [
        { title: 'How it works?', directory: 'How-it-works' },
        { title: 'Add event', directory: 'new-event' },
      ]
    : [{ title: 'Bookmark', directory: 'Bookmark' }];

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
            display: { xs: 'none', md: 'flex' },
            marginRight: '1rem',
          }}
        >
          {pages.map((page) => (
            <Button
              onClick={handleCloseNavMenu}
              key={page.title}
              sx={{ my: 2, color: 'inherit', display: 'block' }}
            >
              <Link to={`/${page.directory}`}>{page.title}</Link>
            </Button>
          ))}

          <Button sx={{ my: 2, color: 'inherit', display: 'block' }}>
            Bookmark
          </Button>
        </Box>
        <AvatarMenu
          handleCloseUserMenu={handleCloseUserMenu}
          handleOpenUserMenu={handleOpenUserMenu}
          anchorElUser={anchorElUser}
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
            display: { xs: 'none', md: 'flex' },
            marginRight: '1rem',
          }}
        >
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'inherit', display: 'block' }}
          >
            How it works
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
