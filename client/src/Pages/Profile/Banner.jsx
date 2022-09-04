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
import { styled } from "@mui/material/styles";
import Options from "./Options";

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
      <Options></Options>
    </Card>
  );
}

export default Banner;
