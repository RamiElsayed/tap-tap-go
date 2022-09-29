import { useState, useEffect } from "react";

import LocationCard from "./LocationCard";
import HostInfoCard from "./HostInfoCard";
import ImageCarousel from "../../components/ImageCarousel";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import Description from "./description";
import ReviewSection from "./ReviewSection";
import Suggestions from "./Suggestions";

import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_EVENTBYID } from "../../graphQL/queries";
import {
  PURCHASE_TICKET,
  UN_PURCHASE_TICKET,
  ATTENDING_TO_EVENT,
} from "../../graphQL/mutations";
import { Typography } from "@mui/material";
import { useModalsContext } from "../../utils/ModalContext";

export default function EventPage() {
  const { openModal } = useModalsContext();
  const { eventId: eventParam } = useParams();
  const { loading, data } = useQuery(QUERY_EVENTBYID, {
    variables: { eventId: eventParam },
  });
  const [createPurchase, { error, mutationData }] =
    useMutation(PURCHASE_TICKET);
  const [deletePurchase] = useMutation(UN_PURCHASE_TICKET);

  const [isAttending] = useMutation(ATTENDING_TO_EVENT);

  const [isAttendingState, setIsAttendingState] = useState(false);
  const [eventData, setEventData] = useState();
  const [eventSection, setEventSection] = useState("Description");
  const [isLoading, setIsLoading] = useState([loading]);

  useEffect(() => {
    isAttending({
      variables: { eventId: eventParam },
    }).then((result) => {
      console.log(result);
      setIsAttendingState(result.data.checkAttendance.attending);
    });
  }, []);

  useEffect(() => {
    if (data?.event) {
      setEventData(data.event);
      setIsLoading((prev) => !prev);
      return;
    }
  }, [data]);

  const handlePurchase = async () => {
    setIsAttendingState(true);

    try {
      const { purchaseData } = await createPurchase({
        variables: { eventId: eventParam },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const updateAttendance = async () => {
    setIsAttendingState(false);

    try {
      await deletePurchase({
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
      <Grid item xs={12} sm={6} lg={3} sx={{ order: { xs: "2", md: "1" } }}>
        <Stack>
          <LocationCard
            handlePurchase={handlePurchase}
            eventData={eventData}
            openModal={openModal}
            isAttending={isAttendingState}
            updateAttendance={updateAttendance}
          />
          <HostInfoCard eventData={eventData} />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} lg={9} sx={{ order: { xs: "1", md: "2" } }}>
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
        </Box>
      </Grid>
    </Grid>
  );
}
