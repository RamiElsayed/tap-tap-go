import { Box, Grid, Typography } from "@mui/material";
import EventCard from "./EventCard.js";

function Cards() {
  const cardData = {
    eventName: "Salsa with Fabian Sarango",
    price: "From £15 per person",
    reviews: [3, 4, 5],
    images: [
      "imageshttps://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rabbit-breeds-1553782731.jpg?crop=0.971xw:0.729xh;0.0293xw,0.178xh&resize=980:*",
      "https://media.istockphoto.com/photos/rabits-against-white-background-picture-id93208803?k=20&m=93208803&s=612x612&w=0&h=y_c4pwVH_UzTlHY_-Kdx8dRKR2VG0kut0JxDmqBUTHc=",
      "https://media.istockphoto.com/photos/rabits-against-white-background-picture-id93208803?k=20&m=93208803&s=612x612&w=0&h=y_c4pwVH_UzTlHY_-Kdx8dRKR2VG0kut0JxDmqBUTHc=",
      "https://media.istockphoto.com/photos/rabits-against-white-background-picture-id93208803?k=20&m=93208803&s=612x612&w=0&h=y_c4pwVH_UzTlHY_-Kdx8dRKR2VG0kut0JxDmqBUTHc=",
    ],
    nRatings: 2,
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
        <Box
          sx={{ height: "100%" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {" "}
          <Typography
            variant="h3"
            fontWeight="500"
            gutterBottom
            textAlign="center"
          >
            Interested in Latin dances??
          </Typography>{" "}
        </Box>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard
          eventName={cardData.eventName}
          price={cardData.price}
          reviews={cardData.reviews}
          images={cardData.images}
          rating={cardData.nRatings}
        ></EventCard>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard
          eventName={cardData.eventName}
          price={cardData.price}
          reviews={cardData.reviews}
          images={cardData.images}
          rating={cardData.nRatings}
        ></EventCard>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard
          eventName={cardData.eventName}
          price={cardData.price}
          reviews={cardData.reviews}
          images={cardData.images}
          rating={cardData.nRatings}
        ></EventCard>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard
          eventName={cardData.eventName}
          price={cardData.price}
          reviews={cardData.reviews}
          images={cardData.images}
          rating={cardData.nRatings}
        ></EventCard>
      </Grid>
      <Grid item xs={11} sm={10} md={4} lg={2}>
        <EventCard
          eventName={cardData.title}
          price={cardData.price}
          reviews={cardData.reviews}
          images={cardData.images}
          rating={cardData.nRatings}
        ></EventCard>
      </Grid>
    </Grid>
  );
}

export default Cards;
