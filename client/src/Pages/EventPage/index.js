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
import { Stack } from "@mui/system";

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
  "Pokem ipsum dolor sit amet Wartortle Palpitoad Donphan Quagsire Tangrowth Pinsir. Kanto Lotad Chimecho Serperior Leafeon Krokorok Cobalion. Pikachu Buizel Drifloon Dusknoir Geodude Fuchsia City Ruby. Hive Badge Celadon Department Store Nosepass Slakoth Helix Fossil Pokemon Master Wailord. Sapphire Seismitoad Charmander Samurott Misty Camerupt Bulbasaur. Qui officia deserunt mollit Flying Vigoroth Mime Jr Hitmontop Huntail Gloom. Vine Whip Starmie Magnemite Skiploom Grimer Sigilyph searching far and wide. Sonic Boom Ledian Kabutops Kanto Venomoth Sawk Wing Attack. Fire Sunkern Bronzong Cobalion Rare Candy quis nostrud exercitation Moltres. Boulder Badge Kyurem Ninetales Regirock Hitmonchan Thunder Badge Diglett. Pokem ipsum dolor sit amet Wartortle Palpitoad Donphan Quagsire Tangrowth Pinsir. Kanto Lotad Chimecho Serperior Leafeon Krokorok Cobalion. Pikachu Buizel Drifloon Dusknoir Geodude Fuchsia City Ruby. Hive Badge Celadon Department Store Nosepass Slakoth Helix Fossil Pokemon Master Wailord. Sapphire Seismitoad Charmander Samurott Misty Camerupt Bulbasaur. Qui officia deserunt mollit Flying Vigoroth Mime Jr Hitmontop Huntail Gloom. Vine Whip Starmie Magnemite Skiploom Grimer Sigilyph searching far and wide. Sonic Boom Ledian Kabutops Kanto Venomoth Sawk Wing Attack. Fire Sunkern Bronzong Cobalion Rare Candy quis nostrud exercitation Moltres. Boulder Badge Kyurem Ninetales Regirock Hitmonchan Thunder Badge Diglett. Pokem ipsum dolor sit amet Wartortle Palpitoad Donphan Quagsire Tangrowth Pinsir. Kanto Lotad Chimecho Serperior Leafeon Krokorok Cobalion. Pikachu Buizel Drifloon Dusknoir Geodude Fuchsia City Ruby. Hive Badge Celadon Department Store Nosepass Slakoth Helix Fossil Pokemon Master Wailord. Sapphire Seismitoad Charmander Samurott Misty Camerupt Bulbasaur. Qui officia deserunt mollit Flying Vigoroth Mime Jr Hitmontop Huntail Gloom. Vine Whip Starmie Magnemite Skiploom Grimer Sigilyph searching far and wide. Sonic Boom Ledian Kabutops Kanto Venomoth Sawk Wing Attack. Fire Sunkern Bronzong Cobalion Rare Candy quis nostrud exercitation Moltres. Boulder Badge Kyurem Ninetales Regirock Hitmonchan Thunder Badge Diglett. Pokem ipsum dolor sit amet Wartortle Palpitoad Donphan Quagsire Tangrowth Pinsir. Kanto Lotad Chimecho Serperior Leafeon Krokorok Cobalion. Pikachu Buizel Drifloon Dusknoir Geodude Fuchsia City Ruby. Hive Badge Celadon Department Store Nosepass Slakoth Helix Fossil Pokemon Master Wailord. Sapphire Seismitoad Charmander Samurott Misty Camerupt Bulbasaur. Qui officia deserunt mollit Flying Vigoroth Mime Jr Hitmontop Huntail Gloom. Vine Whip Starmie Magnemite Skiploom Grimer Sigilyph searching far and wide. Sonic Boom Ledian Kabutops Kanto Venomoth Sawk Wing Attack. Fire Sunkern Bronzong Cobalion Rare Candy quis nostrud exercitation Moltres. Boulder Badge Kyurem Ninetales Regirock Hitmonchan Thunder Badge Diglett. Pokem ipsum dolor sit amet Wartortle Palpitoad Donphan Quagsire Tangrowth Pinsir. Kanto Lotad Chimecho Serperior Leafeon Krokorok Cobalion. Pikachu Buizel Drifloon Dusknoir Geodude Fuchsia City Ruby. Hive Badge Celadon Department Store Nosepass Slakoth Helix Fossil Pokemon Master Wailord. Sapphire Seismitoad Charmander Samurott Misty Camerupt Bulbasaur. Qui officia deserunt mollit Flying Vigoroth Mime Jr Hitmontop Huntail Gloom. Vine Whip Starmie Magnemite Skiploom Grimer Sigilyph searching far and wide. Sonic Boom Ledian Kabutops Kanto Venomoth Sawk Wing Attack. Fire Sunkern Bronzong Cobalion Rare Candy quis nostrud exercitation Moltres. Boulder Badge Kyurem Ninetales Regirock Hitmonchan Thunder Badge Diglett. Pokem ipsum dolor sit amet Wartortle Palpitoad Donphan Quagsire Tangrowth Pinsir. Kanto Lotad Chimecho Serperior Leafeon Krokorok Cobalion. Pikachu Buizel Drifloon Dusknoir Geodude Fuchsia City Ruby. Hive Badge Celadon Department Store Nosepass Slakoth Helix Fossil Pokemon Master Wailord. Sapphire Seismitoad Charmander Samurott Misty Camerupt Bulbasaur. Qui officia deserunt mollit Flying Vigoroth Mime Jr Hitmontop Huntail Gloom. Vine Whip Starmie Magnemite Skiploom Grimer Sigilyph searching far and wide. Sonic Boom Ledian Kabutops Kanto Venomoth Sawk Wing Attack. Fire Sunkern Bronzong Cobalion Rare Candy quis nostrud exercitation Moltres. Boulder Badge Kyurem Ninetales Regirock Hitmonchan Thunder Badge Diglett.Pokem ipsum dolor sit amet Wartortle Palpitoad Donphan Quagsire Tangrowth Pinsir. Kanto Lotad Chimecho Serperior Leafeon Krokorok Cobalion. Pikachu Buizel Drifloon Dusknoir Geodude Fuchsia City Ruby. Hive Badge Celadon Department Store Nosepass Slakoth Helix Fossil Pokemon Master Wailord. Sapphire Seismitoad Charmander Samurott Misty Camerupt Bulbasaur. Qui officia deserunt mollit Flying Vigoroth Mime Jr Hitmontop Huntail Gloom. Vine Whip Starmie Magnemite Skiploom Grimer Sigilyph searching far and wide. Sonic Boom Ledian Kabutops Kanto Venomoth Sawk Wing Attack. Fire Sunkern Bronzong Cobalion Rare Candy quis nostrud exercitation Moltres. Boulder Badge Kyurem Ninetales Regirock Hitmonchan Thunder Badge Diglett. Pokem ipsum dolor sit amet Wartortle Palpitoad Donphan Quagsire Tangrowth Pinsir. Kanto Lotad Chimecho Serperior Leafeon Krokorok Cobalion. Pikachu Buizel Drifloon Dusknoir Geodude Fuchsia City Ruby. Hive Badge Celadon Department Store Nosepass Slakoth Helix Fossil Pokemon Master Wailord. Sapphire Seismitoad Charmander Samurott Misty Camerupt Bulbasaur. Qui officia deserunt mollit Flying Vigoroth Mime Jr Hitmontop Huntail Gloom. Vine Whip Starmie Magnemite Skiploom Grimer Sigilyph searching far and wide. Sonic Boom Ledian Kabutops Kanto Venomoth Sawk Wing Attack. Fire Sunkern Bronzong Cobalion Rare Candy quis nostrud exercitation Moltres. Boulder Badge Kyurem Ninetales Regirock Hitmonchan Thunder Badge Diglett.";

export default function EventPage() {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={3}
        sx={{ order: { xs: "2", md: "1" } }}
      >
        <Stack>
          <EventDetailsA eventData={eventData} />
          <EventDetailsB eventData={eventData} />
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={9}
        sx={{ order: { xs: "1", md: "2" } }}
      >
        <Stack>
          <ImageCarousel />
          <Button
            sx={{
              backgroundColor: "#aa182b",
              marginY: "1rem",
              marginX: "auto",
              width: "250px",
              height: "50px",
            }}
            variant="contained"
          >
            Get Tickets
          </Button>
          <div>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              {eventData.title}
            </h1>
            <p style={{ margin: " 0 50px" }}>{eventText}</p>
          </div>

          <h1
            style={{
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            Reviews
          </h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <ReviewCard
              title={cardData.title}
              rating={cardData.value}
              username={cardData.author}
              reviewText={cardData.description}
            />
            <ReviewCard
              title={cardData.title}
              rating={cardData.value}
              username={cardData.author}
              reviewText={cardData.description}
            />
            <ReviewCard
              title={cardData.title}
              rating={cardData.value}
              username={cardData.author}
              reviewText={cardData.description}
            />
          </Box>
          <Stack>
            <h1 style={{ marginTop: "50px", textAlign: "center" }}>
              Looking for Similar Events?
            </h1>
            <ul className="tags-list">
              <li>
                <a href="#">Tag 1</a>
              </li>
              <li>
                <a href="#">Tag 2</a>
              </li>
              <li>
                <a href="#">Tag 3</a>
              </li>
              <li>
                <a href="#">Tag 4</a>
              </li>
              <li>
                <a href="#">Tag 5</a>
              </li>
              <li>
                <a href="#">Tag 6</a>
              </li>
            </ul>
          </Stack>
        </Stack>
      </Grid>

      {/* <Grid item xs={12} sm={6} md={6} lg={9} xl={9}>
        <Stack>
          <Button className="get-tix-btn" variant="contained">
            Get Tickets
          </Button>
          <div>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              {eventData.title}
            </h1>
            <p style={{ margin: " 0 50px" }}>{eventText}</p>
          </div>
        </Stack>
      </Grid> */}
      {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Reviews
        </h1>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Stack>
          {" "}
          <ReviewCard
            title={cardData.title}
            rating={cardData.value}
            username={cardData.author}
            reviewText={cardData.description}
          />
          <ReviewCard
            title={cardData.title}
            rating={cardData.value}
            username={cardData.author}
            reviewText={cardData.description}
          />
          <ReviewCard
            title={cardData.title}
            rating={cardData.value}
            username={cardData.author}
            reviewText={cardData.description}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Stack>
          <h1 style={{ marginTop: "50px", textAlign: "center" }}>
            Looking for Similar Events?
          </h1>
          <ul className="tags-list">
            <li>
              <a href="#">Tag 1</a>
            </li>
            <li>
              <a href="#">Tag 2</a>
            </li>
            <li>
              <a href="#">Tag 3</a>
            </li>
            <li>
              <a href="#">Tag 4</a>
            </li>
            <li>
              <a href="#">Tag 5</a>
            </li>
            <li>
              <a href="#">Tag 6</a>
            </li>
          </ul>
        </Stack>
      </Grid> */}
    </Grid>
  );
}
