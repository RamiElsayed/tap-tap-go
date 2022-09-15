import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function EventCard({ eventName, price, reviews, images }) {
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
  import { Link as RouterLink } from "react-router-dom";

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea component={RouterLink} to={"/event"}>
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
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="left"
            mt={2}
          >
            £{price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
