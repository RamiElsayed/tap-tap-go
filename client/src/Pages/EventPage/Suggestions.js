import { Stack } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import EventCard from "../../components/Cards/EventCard";
import React from "react";

function Suggestions({ suggestedEvents }) {
  const randomTagData =
    suggestedEvents[Math.floor(Math.random() * suggestedEvents.length)];
  const randomEventSuggester = randomTagData.events;

  const [randomEventSuggestion, setRandomEventSuggestion] =
    React.useState(randomEventSuggester);
  console.log(randomEventSuggester);
  return (
    <>
      <Stack width="100%">
        <Typography
          variant="h3"
          fontWeight="600"
          style={{ marginTop: "50px", textAlign: "center" }}
        >
          Similar Events
        </Typography>
        <Grid
          container
          mt="1rem"
          spacing={3}
          width="100%"
          justifyContent="center"
          className="section__block-4"
        >
          {randomEventSuggestion.map((el, i) => {
            return (
              <>
                <Grid key={i} item xs={11} sm={10} md={4} lg={3}>
                  <EventCard {...el} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
}

export default Suggestions;
