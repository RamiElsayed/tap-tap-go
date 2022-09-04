import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Banner from "./Banner";
import Description from "./Description";
import PostingBoard from "./PostingBoard";
import PostBoard from "./PostBoard";
import CreteEvent from "./CreteEvent";

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} marginTop="2rem">
        <Grid item xs={12}>
          <Banner></Banner>
        </Grid>
        {/* <Grid item xs={12}>
          <Options></Options>
        </Grid> */}
        <Grid item xs={12} md={3}>
          <Description></Description>
          <PostingBoard></PostingBoard>
          <CreteEvent></CreteEvent>
        </Grid>
        <Grid item xs={12} md={9}>
          <PostBoard></PostBoard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
