import { Box, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

function Banner() {
  const [open, setOpen] = useState(false);

  return (
    <Paper>
      <Box display="flex">
        <Paper
          sx={{ width: "150px", height: "150px", backgroundColor: "black" }}
        >
          image
        </Paper>
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
      </Box>
    </Paper>
  );
}

export default Banner;
