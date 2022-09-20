import { Grid, Stack, Typography } from "@mui/material";
import EventCard from "../../components/Cards/EventCard";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SEARCH_EVENTS_CITY } from "../../graphQL/mutations";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";

const CityEventsPage = () => {
  const [events, setEvents] = useState([]);
  const { city } = useParams();

  const [searchEventsByCity] = useMutation(SEARCH_EVENTS_CITY);

  const getEvents = async () => {
    try {
      const { data } = await searchEventsByCity({
        variables: { input: { city } },
      });

      if (data) {
        setEvents(data.searchByCity);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  function renderEvents() {
    if (events.length !== 0) {
      return events.map((el, i) => {
        return (
          <Grid key={i} item xs={11} sm={10} md={4} lg={3}>
            <EventCard {...el} />
          </Grid>
        );
      });
    } else {
      return (
        <Stack>
          <Typography textAlign="center" variant="h2">
            No events in this area
          </Typography>
        </Stack>
      );
    }
  }

  return (
    <Box className="section__block-14">
      <Typography variant="h2" textAlign="center" my={4}>
        Events in <span style={{ fontWeight: "500" }}> {city}</span>
      </Typography>
      <Grid
        container
        mt="1rem"
        spacing={3}
        width="100%"
        className="section__block-4"
      >
        {renderEvents()}
      </Grid>
    </Box>
  );
};

export default CityEventsPage;
