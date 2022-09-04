import {
  Box,
  Card,
  CardContent,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container, height } from "@mui/system";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import avatarImg from "../../_mock/avatarImg.jpg";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  paddingRight: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.error.dark,
  fontWeight: 500,
  whiteSpace: "nowrap",
}));

function Banner() {
  const [open, setOpen] = useState(false);

  return (
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
          <Box sx={{ display: "flex" }}>
            <Stack marginRight="2rem">
              <Typography variant="h6">Contributions</Typography>
              <Typography variant="h6">0</Typography>
            </Stack>
            <Stack marginRight="2rem">
              <Typography variant="h6">Followers</Typography>
              <Typography variant="h6">0</Typography>
            </Stack>
            <Stack marginRight="2rem">
              <Typography variant="h6">Followings</Typography>
              <Typography variant="h6">0</Typography>
            </Stack>
          </Box>
        </Stack>
      </CardContent>
      <Box
        overflow={true}
        sx={{
          display: "flex",
          overflow: "auto",
          paddingLeft: "2rem",
          paddingBottom: "0.5rem",
        }}
      >
        <Item>Activities</Item>
        <Item>Tickets</Item>
        <Item>Bookmarks</Item>
        <Item>Own events</Item>
        <Item>Reviews</Item>
        <Item>Manage</Item>
      </Box>
    </Card>
  );
}

export default Banner;
