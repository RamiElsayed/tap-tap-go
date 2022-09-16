import { Grid, Typography } from "@mui/material";
import ReviewCard from "../../components/ReviewCard";
import CityCard from "./CityCard";
import { useParams } from "react-router-dom";

const CityEventsPage = () => {
  const { city, tag } = useParams();

  const input = { city, tag };

  console.log(input);
  return (
    <Grid
      container
      sx={{
        flexGrow: "1",
      }}
      className="section__block-5"
    >
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="left" my={4}>
          City Name
        </Typography>
        {/* TODO: will map later with data. all of these card to make sure layout is correct and responsiveness */}
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CityEventsPage;
