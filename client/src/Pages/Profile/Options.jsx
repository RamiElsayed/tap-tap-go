import { Card, CardContent, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import React, { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.error.dark,
  fontWeight: 500,
}));

function Options() {
  const [open, setOpen] = useState(false);

  return (
    <Card elevation={1}>
      <Stack direction="row" spacing={5}>
        <Item>Activities</Item>
        <Item>Tickets</Item>
        <Item>Bookmarks</Item>
        <Item>Own events</Item>
        <Item>Reviews</Item>
        <Item>Manage</Item>
      </Stack>
    </Card>
  );
}

export default Options;
