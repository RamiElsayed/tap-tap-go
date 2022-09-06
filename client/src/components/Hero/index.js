import { Grid } from "@mui/material";
import React from "react";
import QuiltedImageList from "./sub-components/ImagesColumn";
import Search from "./sub-components/Search";
import CategoryPicker from "./sub-components/CategoryPicker";
import BasicDatePicker from "./sub-components/DatePicker";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  // ...
});

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
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: { xs: "3rem", md: "0rem" },
          }}
        >
          <Typography variant="h1" gutterBottom textAlign="center">
            Hobbies everywhere!
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <Search></Search>
            </Grid>
            <Grid item xs={12} md={6}>
              <CategoryPicker></CategoryPicker>
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicDatePicker />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={4}>
          <QuiltedImageList></QuiltedImageList>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Hero;
