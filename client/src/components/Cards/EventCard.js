import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ToggleFavorite from "./ToggleFavorite";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";

export default function EventCard({ eventName, price, reviews, images }) {
  const [hearted, setHearted] = useState(false);
  const toggleHeart = () => setHearted(!hearted);
  const averageRating = () => {
    return (
      reviews
        .map((review) => review.rating)
        .reduce((acc, curr) => acc + curr, 0) / reviews.length
    );
  };

  const randomImageSelector = () => {
    return images[Math.floor(Math.random() * images.length)].imageLink;
  };

  console.log("reviews", reviews);

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={randomImageSelector()}
          alt={eventName}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            textAlign="left"
          >
            {eventName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <Rating
              size="small"
              name="read-only"
              // value={props.cardData.value}
              value={averageRating()}
              precision={0.5}
              readOnly
            />
            <Typography variant="caption">{reviews.length}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="left"
              mt={2}
            >
              {price}
            </Typography>
            <IconButton onClick={toggleHeart}>
              <ToggleFavorite hearted={hearted} />
            </IconButton>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
