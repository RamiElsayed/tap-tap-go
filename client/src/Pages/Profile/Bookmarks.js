import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import React, { useState } from "react";
import EventCard from "../../components/Cards/EventCard.js";

const cardData = {
  title: "Salsa with Fabian Sarango",
  price: "From £15 per person",
  value: 4,
  nRatings: 254,
};

function Bookmarks({ bookmarkData }) {
  return (
    <Card sx={{ width: { xs: "100%", md: "100%" } }}>
      <CardContent
        sx={{
          width: { xs: "99%", md: "100%" },
          marginX: "auto",
          paddingY: "2rem",
        }}
      >
        <Grid
          container
          spacing={3}
          width="100%"
          justifyContent="center"
          className="section__block-4"
        >
          {bookmarkData.map((el, i) => {
            return (
              <Grid item xs={11} sm={10} md={4} lg={3}>
                <EventCard key={el._id} {...el} />
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Bookmarks;
