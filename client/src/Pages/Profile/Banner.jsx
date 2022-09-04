import {
  Box,
  Card,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Container, height } from "@mui/system";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import avatarImg from "../../_mock/avatarImg.jpg";
import { styled, ThemeProvider } from "@mui/material/styles";
import Options from "./Options";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h6 = {
  fontSize: "0.75rem",
  "@media (min-width:600px)": {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    fontWeight: "400",
  },
};

function Banner() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardContent sx={{ display: "flex" }}>
          <Avatar
            sx={{ width: "150px", height: "auto", marginRight: "3rem" }}
            alt="Remy Sharp"
            src={avatarImg}
          />
          <Stack height="100" justifyContent="space-between">
            <Typography display="block" variant="h6" component="span">
              Name
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Stack marginRight="2rem">
                <Typography variant="h6">Contributions</Typography>
                <Typography variant="h5">0</Typography>
              </Stack>
              <Stack marginRight="2rem">
                <Typography variant="h6">Followers</Typography>
                <Typography variant="h5">0</Typography>
              </Stack>
              <Stack marginRight="2rem">
                <Typography variant="h6">Following</Typography>
                <Typography variant="h5">0</Typography>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
        <Stack
          height="100"
          sx={{ display: { xs: "block", md: "none", paddingLeft: "1rem" } }}
        >
          <Box sx={{ display: "flex" }}>
            <Stack marginRight="2rem">
              <Typography variant="h6">Contributions</Typography>
              <Typography variant="body1">0</Typography>
            </Stack>
            <Stack marginRight="2rem">
              <Typography variant="h6">Followers</Typography>
              <Typography variant="body1">0</Typography>
            </Stack>
            <Stack marginRight="2rem">
              <Typography variant="h6">Following</Typography>
              <Typography variant="body1">0</Typography>
            </Stack>
          </Box>
        </Stack>
        <Options></Options>
      </Card>
    </ThemeProvider>
  );
}

export default Banner;
