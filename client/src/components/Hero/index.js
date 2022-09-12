import { Grid } from "@mui/material";
import React from "react";
import ImagesSideColumn from "./sub-components/ImagesSideColumn";
import Search from "./sub-components/Search";

import BasicDatePicker from "./sub-components/DatePicker";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { top100Films } from "./sub-components/fakeData";

let theme = createTheme({});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: 73,
      [theme.breakpoints.only("xs")]: {
        fontSize: 55,
      },
    },
  },
});

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} className="section__block-5">
        <Grid
          item
          justifyContent="center"
          xs={12}
          md={7}
          lg={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: { xs: "3rem", md: "0rem" },
          }}
        >
          <Typography variant="h1" gutterBottom textAlign="center">
            Hobbies everywhere!
          </Typography>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Search
                category={top100Films}
                inputLabel="Search by city"
                position="auto"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Search
                category={top100Films}
                inputLabel="Select a category"
                position="0 0 0 auto "
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicDatePicker />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={5} lg={4}>
          <ImagesSideColumn></ImagesSideColumn>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Hero;
