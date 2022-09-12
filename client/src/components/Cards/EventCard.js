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

export default function EventCard(props) {
  const [hearted, setHearted] = useState(false);
  const toggleHeart = () => setHearted(!hearted);
  return (
    <Card sx={{ maxWidth: "100%" }}>
      {" "}
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://upload.wikimedia.org/wikipedia/commons/2/2b/Salsa_dancing.jpg"
          alt={props.cardData.alt}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            textAlign="left"
          >
            {props.cardData.title}
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
              value={props.cardData.value}
              readOnly
            />
            <Typography variant="caption">{props.cardData.nRatings}</Typography>
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
              {props.cardData.price}
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
