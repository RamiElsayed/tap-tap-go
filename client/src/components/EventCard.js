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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://upload.wikimedia.org/wikipedia/commons/2/2b/Salsa_dancing.jpg"
          alt={props.alt}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="left"
          >
            {props.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <Rating name="read-only" value={props.value} readOnly />
            <Typography variant="caption" display="inline" gutterBottom>
              {props.nRatings}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="left"
            mt={2}
          >
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
