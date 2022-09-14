import EventDetailsA from "../../components/EventDetails/EventDetailsA";
import EventDetailsB from "../../components/EventDetails/EventDetailsB";
import ImageCarousel from "../../components/ImageCarousel";
import ReviewCard from "../../components/ReviewCard/index";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

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
  title: "Salsa with Fabian Sarango",
  location: "Velvet Rooms",
  price: 8,
  ageGroup: "All Welcome",
  address1: "Exchange Building",
  address2: "3 Centenary Square",
  address3: "Birmingham",
  postcode: "B1 2DR",
};

const eventText =
  "Pokem ipsum dolor sit amet Wartortle Palpitoad Donphan Quagsire Tangrowth Pinsir. Kanto Lotad Chimecho Serperior Leafeon Krokorok Cobalion. Pikachu Buizel Drifloon Dusknoir Geodude Fuchsia City Ruby. Hive Badge Celadon Department Store Nosepass Slakoth Helix Fossil Pokemon Master Wailord. Sapphire Seismitoad Charmander Samurott Misty Camerupt Bulbasaur. Qui officia deserunt mollit Flying Vigoroth Mime Jr Hitmontop Huntail Gloom. Vine Whip Starmie Magnemite Skiploom Grimer Sigilyph searching far and wide. Sonic Boom Ledian Kabutops Kanto Venomoth Sawk Wing Attack. Fire Sunkern Bronzong Cobalion Rare Candy quis nostrud exercitation Moltres. Boulder Badge Kyurem Ninetales Regirock Hitmonchan Thunder Badge Diglett.";

export default function EventPage() {
  return (
    <Box display="flex">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <EventDetailsA eventData={eventData} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={9} xl={9}>
          <ImageCarousel />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <EventDetailsB eventData={eventData} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={9} xl={9}>
          <Button className="get-tix-btn" variant="contained">
            Get Tickets
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <div></div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={9} xl={9}>
          <div class="event-text">
            <h1 style={{ textAlign: "center" }}>{eventData.title}</h1>
            <p>{eventText}</p>
          </div>
        </Grid>
        <Grid item xs={8}>
          <ReviewCard cardData={cardData} />
        </Grid>
      </Grid>
    </Box>
  );
}
