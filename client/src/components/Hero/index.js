import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import QuiltedImageList from "./sub-components/ImagesColumn";
import Search from "./sub-components/Search";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <Grid container spacing={2} className="section__block-2">
      <Grid
        item
        justifyContent="center"
        xs={12}
        md={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: { xs: "3rem", md: "0rem" },
        }}
      >
        <Search></Search>
      </Grid>
      <Grid item xs={0} md={4}>
        <QuiltedImageList></QuiltedImageList>
      </Grid>
    </Grid>
  );
};
export default Hero;
