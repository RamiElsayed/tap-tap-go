import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Link } from "react-router-dom";

const RecentlySeen = ({ recentSearches }) => {
  return (
    <>
      <Typography variant="h5" fontWeight="600" gutterBottom>
        Recent searches
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        mx="auto"
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
          {recentSearches.map((el) => (
            <Grid item key={el} md={"auto"}>
              <Button
                variant="outlined"
                sx={{ color: "black", borderColor: "black" }}
              >
                <LocationOnIcon />
                <Typography variant="h6">{el}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default RecentlySeen;
