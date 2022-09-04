import { Grid, ListItem } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Options from "./Options";
import Banner from "./Banner";

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Banner></Banner>
        </Grid>
        <Grid item xs={12}>
          <Options></Options>
        </Grid>
        <Grid item xs={12} md={3}>
          <ListItem>Profile</ListItem>
          <ListItem>Sidebar with info</ListItem>
        </Grid>
        <Grid item xs={12} md={9}>
          Posts
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
