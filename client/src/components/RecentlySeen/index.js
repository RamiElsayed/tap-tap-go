import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Link } from "react-router-dom";

const RecentlySeen = () => {
  return (
    <>
      <Typography variant="h5" fontWeight="600" gutterBottom>
        Recent searches
      </Typography>
      <Grid
        container
        spacing={2}
        marginX="2rem"
        alignItems="center"
        marginX="auto"
        className="section__block-5"
      >
        <Grid
          item
          sm={10}
          container
          columnSpacing={1}
          rowSpacing={1}
          display="flex"
          flexDirection="row"
        >
          <Grid item xs={5} md={"auto"}>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
            >
              <LocationOnIcon />
              <Typography variant="h6">Birmingham</Typography>
            </Button>
          </Grid>
          <Grid item xs={5} md={"auto"}>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
            >
              <LocationOnIcon />
              <Typography variant="h6">London</Typography>
            </Button>
          </Grid>
          <Grid item xs={5} md={"auto"}>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
            >
              <LocationOnIcon />
              <Typography variant="h6">Derby</Typography>
            </Button>
          </Grid>
          <Grid item xs={5} md={"auto"}>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
            >
              <LocationOnIcon />
              <Typography variant="h6">Brighton</Typography>
            </Button>
          </Grid>
          <Grid item xs={5} md={"auto"}>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
            >
              <LocationOnIcon />
              <Typography variant="h6">Manchester</Typography>
            </Button>
          </Grid>
          <Grid item xs={5} md={"auto"}>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
            >
              <LocationOnIcon />
              <Typography variant="h6">Leeds</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default RecentlySeen;
