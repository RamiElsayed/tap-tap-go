import { Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import React, { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Options() {
  const [open, setOpen] = useState(false);

  return (
    <Paper elevation={1}>
      <Stack direction="row" spacing={3}>
        <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>Four</Item>
        <Item>Five</Item>
      </Stack>
    </Paper>
  );
}

export default Options;
