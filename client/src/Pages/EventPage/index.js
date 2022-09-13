import EventDetailsA from "../../components/EventDetails/EventDetailsA";
import EventDetailsB from "../../components/EventDetails/EventDetailsB";
import ImageCarousel from "../../components/ImageCarousel";
import ReviewCard from "../../components/ReviewCard/index";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const cardData = {
  title: "Best Place to learn a new skill!",
  author: "Fabian Sarango",
  description:
    "I can suggest this is the best website for finding the next place to go! I will recommend it to my friends",
  value: 4,
};

const eventData = {
  date: "12th May 1990",
  username: "Username Jones",
  name: "Salsa with Fabian Sarango",
  location: "Velvet Rooms",
  price: 8,
};

export default function EventPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <EventDetailsA eventData={eventData} />
        </Grid>
        <Grid item xs={12} md={6} lg={9} xl={9}>
          <ImageCarousel />
        </Grid>
        <Grid item xs={4}>
          <Item>
            <EventDetailsB />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <ReviewCard cardData={cardData} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
