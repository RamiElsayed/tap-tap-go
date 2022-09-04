import { Box, Card, CardContent, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
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

function Options() {
  const [open, setOpen] = useState(false);

  return (
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
  );
}

export default Options;
