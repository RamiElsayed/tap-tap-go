import { Button, Grid } from "@mui/material";
import React from "react";
import ImagesSideColumn from "./sub-components/ImagesSideColumn";
import Search from "./sub-components/Search";

import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QUERY_TAGS } from "../../graphQL/queries";
import { useQuery } from "@apollo/client";
import SearchLocation from "./sub-components/SearchLocation";
import { Link } from "react-router-dom";

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

export default function Hero() {
  const { loading, data } = useQuery(QUERY_TAGS);
  const [tags, setTags] = React.useState([]);
  const [city, setCity] = React.useState("");
  const [urlSearch, setUrlSearch] = React.useState("");
  const [searchTag, setSearchTag] = React.useState("");

  React.useEffect(() => {
    if (data?.tags?.length) {
      let tagsArr = data.tags.map((tagObj) => {
        return { title: tagObj.tagName };
      });
      setTags(tagsArr);
    }
  }, [data]);

  React.useEffect(() => {
    if (searchTag === "") {
      setUrlSearch(`/search-by-city/${city}`);
      return;
    } else {
      setUrlSearch(`/search/${city}/${searchTag}`);
    }
  }, [city, searchTag]);

  function handleTagChange(event) {
    setSearchTag(event);
  }
  function handleAddress(city) {
    setCity(city);
  }

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
          <Grid
            container
            rowSpacing={2}
            columnSpacing={2}
            sx={{ width: { xs: "100%", md: "80%" }, marginX: "auto" }}
          >
            <Grid item xs={8}>
              <SearchLocation updateLocation={handleAddress} />
            </Grid>
            <Grid item xs={10} md={4}>
              <Search
                updateTag={handleTagChange}
                category={tags}
                inputLabel="Select a category"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "center", justifyContent: "center" }}
            >
              <Link to={`${urlSearch}`}>
                <Button size="large" variant="outlined">
                  Search
                </Button>
              </Link>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <BasicDatePicker />
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={0} md={5} lg={4}>
          <ImagesSideColumn />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
