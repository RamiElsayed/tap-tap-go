import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";

export default function EventCard(props) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
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
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="left"
            mt={2}
          >
            {props.cardData.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
