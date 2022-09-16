import { useState, useEffect } from "react";

import EventDetailsA from "../../components/EventDetails/EventDetailsA";
import EventDetailsB from "../../components/EventDetails/EventDetailsB";
import ImageCarousel from "../../components/ImageCarousel";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import ReviewForm from "../../components/ReviewForm";
import Description from "./description";
import ReviewSection from "./ReviewSection";
import Suggestions from "./Suggestions";

import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_EVENTBYID } from "../../graphQL/queries";
import { PURCHASE_TICKET } from "../../graphQL/mutations";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function EventPage() {
  const { eventId: eventParam } = useParams();
  const { loading, data } = useQuery(QUERY_EVENTBYID, {
    variables: { eventId: eventParam },
  });
  const [createPurchase, { error, mutationData }] =
    useMutation(PURCHASE_TICKET);

  const [eventData, setEventData] = useState();
  const [eventSection, setEventSection] = useState("Description");
  const [isLoading, setIsLoading] = useState([loading]);

  useEffect(() => {
    if (data?.event) {
      setEventData(data.event);
      setIsLoading((prev) => !prev);
      return;
    }
  }, [data]);

  const handlePurchase = async () => {
    try {
      const { purchaseData } = await createPurchase({
        variables: { eventId: eventParam },
      });
    } catch (e) {
      console.error(e);
    }
  };

  function renderSection() {
    if (eventSection === "Description") {
      return <Description eventData={eventData} />;
    } else if (eventSection === "Reviews") {
      return (
        <ReviewSection eventId={eventParam} cardData={eventData.reviews} />
      );
    } else if (eventSection === "Suggestions") {
      return <Suggestions suggestedEvents={eventData.tags} />;
    } else {
      return <Description eventData={eventData} />;
    }
  }
  return isLoading ? (
    <Typography variant="h3" marginTop="6rem">
      loading
    </Typography>
  ) : (
    <Grid container spacing={3} sx={{ mt: "1rem", mb: "10rem" }}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={3}
        sx={{ order: { xs: "2", md: "1" } }}
      >
        <Stack>
          <EventDetailsA
            handlePurchase={handlePurchase}
            eventData={eventData}
          />
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ImageCarousel images={eventData.images} />
          <Button
            onClick={handlePurchase}
            sx={{
              display: { xs: "block", md: "none" },
              marginTop: "3rem",
              marginX: "auto",
              width: "250px",
              height: "50px",
            }}
            variant="contained"
            color="error"
          >
            Get Tickets
          </Button>
          <Grid container spacing={2} justifyContent="center" mt="3rem">
            <Grid item xs={3}>
              <Button
                onClick={() => setEventSection("Description")}
                fullWidth
                variant="contained"
              >
                Description
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={() => setEventSection("Reviews")}
                fullWidth
                variant="contained"
              >
                Reviews
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={() => setEventSection("Suggestions")}
                fullWidth
                variant="contained"
              >
                Similar Events
              </Button>
            </Grid>
          </Grid>
          {renderSection()}
          {/* <Description eventData={eventData} eventText={eventText} />

          <ReviewSection cardData={cardData} />
          <Suggestions /> */}
        </Box>
      </Grid>
    </Grid>
  );
}
