import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import EventCard from "./EventCard.js";

function Cards() {
  const cardData = {
    title: "Salsa with Fabian Sarango",
    price: "From £15 per person",
    value: 4,
    nRatings: 254,
  };
  return (
    <Grid
      container
      spacing={3}
      width="100%"
      justifyContent="center"
      className="section__block-4"
    >
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <Paper sx={{ height: "100%", backgroundColor: "navy" }}> </Paper>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard cardData={cardData}></EventCard>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard cardData={cardData}></EventCard>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard cardData={cardData}></EventCard>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard cardData={cardData}></EventCard>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard cardData={cardData}></EventCard>
      </Grid>
    </Grid>
  );
}

export default Cards;
